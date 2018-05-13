<template>
  <el-form class="login-form" :model="form" label-width="100px">
    <el-form-item label="ORT">
      <el-select
        v-model="form.ort"
        filterable
        remote
        placeholder="请输入ORT"
        :remote-method="ortEvt">
        <el-option
          v-for="(item, index) in ortList"
          :key="index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="ADMIN">
      <el-select
        v-model="form.admin"
        filterable
        remote
        placeholder="请输入ADMIN"
        :remote-method="adminEvt">
        <el-option
          v-for="(item, index) in adminList"
          :key="index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitEvt">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        ort: '',
        admin: ''
      },
      ortList: [],
      adminList: []
    }
  },
  methods: {
    ortEvt (val) {
      this.$ajax(
        '/index/filter',
        { val, type: 'ort' }
      ).then(res => {
        this.ortList = res
      }, () => {
        this.$message.error('请求异常')
      })
    },
    adminEvt (val) {
      this.$ajax(
        '/index/filter',
        { val, type: 'admin' }
      ).then(res => {
        this.adminList = res
      }, () => {
        this.$message.error('请求异常')
      })
    },
    submitEvt () {
      this.$router.push({
        path: '/table',
        query: this.form
      })
    }
  }
}
</script>
