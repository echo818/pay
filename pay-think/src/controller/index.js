const XLSX = require('xlsx')
const Base = require('./base.js')

module.exports = class extends Base {
  indexAction() {
    return this.success({
      name: 'thinkjs'
    })
  }

  async filterAction() {
    const {val, type} = this.post('val,type')
    const account = this.model('account')
    let data = []
    if (type === 'otr') {
      data = await account.where({otr: ['like', `%${val}%`]}).distinct('otr').getField('otr')
    } else if (type === 'admin') {
      data = await account.where({admin: ['like', `%${val}%`]}).distinct('admin').getField('admin')
    }
    return this.success(data)
  }

  async listAction() {
    const {page, ...params} = this.post('page,otr,admin,seller,store,asin,price')
    for (let key in params) {
      if (params[key] === '') delete params[key]
    }
    const account = this.model('account')
    const data = await account.where(params).order('id DESC').page(page).countSelect()
    if (think.isEmpty(data)) {
      return this.fail('找不到信息')
    }
    return this.success(data)
  }

  async exportAction() {
    this.header('Content-Disposition', `attachment; filename=${Date.now()}.xlsx`)

    const params = this.get('otr,admin,seller,store,asin,price')
    for (let key in params) {
      if (params[key] === '') delete params[key]
    }
    const account = this.model('account')
    const data = await account.where(params).order('id DESC').fieldReverse('createTime').select()
    
    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
    const buf = XLSX.write(wb, {type:'buffer', bookType:'xlsx'})
    this.body = buf
  }

  async storeAction() {
    const {add, update, del} = this.post('add,update,del')
    const account = this.model('account')
    // 删除
    let affectedRows = []
    if (del.length) {
      affectedRows = await account.where({id: ['IN', del]}).delete()
    }
    // 添加
    let insertIds = []
    if (add.length) {
      insertIds = await account.addMany(add)
    }
    // 更新
    let affectRows = []
    if (update.length) {
      affectRows = await account.updateMany(update)
    }
    return this.success({
      addRows: insertIds,
      updateRows: affectRows,
      delRows: affectedRows
    })
  }
};