import Vue from 'vue'
import VueRouter  from 'vue-router'
Vue.use(VueRouter)


// 导入组件
import login from './components/login.vue';
import index from './components/index.vue';
import users from './components/users.vue'

// 规则
let routes = [
  {
    path:"/login",
    component:login
  },
  {
    path:"/",
    component:index,
    // 嵌套路由
    children:[
      {
        path:'users',
        component:users
      }
    ]
  },
]

// 实例化路由对象
let router = new VueRouter({
  routes
})

// 暴露
export default router