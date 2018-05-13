<template>
  <el-container>
    <el-header height="160px">
      <el-form :model="form" label-width="100px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="ORT">
              <el-input v-model="form.ort"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="ADMIN">
              <el-input v-model="form.admin"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="SELLER">
              <el-input v-model="form.seller"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="STORE">
              <el-input v-model="form.store"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="ASIN">
              <el-input v-model="form.asin"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="PRICE">
              <el-input v-model="form.price"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="search-box">
        <el-button type="primary" icon="el-icon-search" @click="searchEvt">搜索</el-button>
      </div>
    </el-header>
    <el-main>
      <div class="ctrl-box">
        <el-button type="primary" icon="el-icon-plus" @click="addEvt">添加</el-button>
        <el-button type="warning" icon="el-icon-download" @click="downloadEvt">下载</el-button>
        <el-button type="danger" @click="saveEvt">保存</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          label="ORT"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.ort" placeholder="请输入ORT"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="Admin"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.admin" placeholder="请输入Admin"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="Seller"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.seller" placeholder="请输入Seller"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="Store"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.store" placeholder="请输入Store"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="Product"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.product" placeholder="请输入Product"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="Asin"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.asin" placeholder="请输入Asin"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="Price"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.price" placeholder="请输入Price"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="Time"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.time" placeholder="请输入Time"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="Name"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name" placeholder="请输入Name"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="OrderId"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.orderId" placeholder="请输入OrderId"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="Paypal"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.paypal" placeholder="请输入Paypal"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="review"
          min-width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.review" placeholder="请输入review"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="isPay"
          min-width="80">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.isPay" :active-value="1" :inactive-value="0"></el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="备注"
          min-width="300">
          <template slot-scope="scope">
            <el-input v-model="scope.row.remark" placeholder="请输入备注"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="deleteEvt(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="table-page"
        background
        @current-change="currentChange"
        layout="prev, pager, next"
        :current-page="form.page"
        :total="total">
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
import { URL } from '@/config'
export default {
  name: 'tables',
  data () {
    const {ort, admin} = this.$route.query
    return {
      form: {
        ort,
        admin,
        seller: '',
        store: '',
        asin: '',
        price: '',
        page: 1
      },
      tableData: [],
      total: 1,
      deleteIds: [],
      newRows: [],
      updateRows: []
    }
  },
  methods: {
    addEvt () {
      const {ort, admin, seller} = this.form
      this.tableData.push({
        ort,
        admin,
        seller,
        store: '',
        asin: '',
        price: '',
        time: '',
        name: '',
        orderId: '',
        paypal: '',
        review: '',
        isPay: 0,
        remark: ''
      })
    },
    deleteEvt (index, rows) {
      this.tableData.splice(index, 1)
      if (rows.id !== undefined) {
        this.deleteIds.push(rows.id)
      }
    },
    downloadEvt () {
      let {page, ...params} = this.form
      let query = ''
      for (let key in params) {
        let val = params[key]
        if (val !== '') query += `&${key}=${val}`
      }
      window.open(`${URL}/index/export?${query.slice(1)}`)
    },
    saveEvt () {
      for (let rows of this.tableData) {
        if (rows.id === undefined) {
          this.newRows.push({
            ort: this.form.ort,
            ...rows
          })
        } else {
          this.updateRows.push(rows)
        }
      }
      this.$ajax(
        '/index/store',
        {
          add: this.newRows,
          update: this.updateRows,
          del: this.deleteIds
        }
      ).then(res => {
        this.newRows = []
        this.updateRows = []
        this.deleteIds = []
        this.tableData = []
      }, () => {
        this.$message.error('保存失败')
      })
    },
    searchEvt () {
      this.$ajax(
        '/index/list',
        this.form
      ).then(res => {
        this.tableData = res.data
        this.total = res.totalPages
      }, () => {
        this.$message.error('没有找到数据')
      })
    },
    currentChange (page) {
      this.form.page = page
      this.searchEvt()
    }
  }
}
</script>
