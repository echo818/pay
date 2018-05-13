import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Table from '@/views/Table'
import Error from '@/views/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Default', redirect: 'login'},
    {path: '/login', name: 'Login', component: Login},
    {path: '/table', name: 'TableDesc', component: Table},
    {path: '*', name: 'Error', component: Error}
  ]
})
