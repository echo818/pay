import { URL } from '@/config'
export default function (Vue) {
  Vue.prototype.$ajax = function (url, data = {}, opts = {}) {
    return fetch(URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      return res.json()
    }).then(res => {
      if (res.errno === 0) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    })
  }
}
