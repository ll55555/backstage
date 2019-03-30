import Vue from 'vue'
import VueRouterr  from 'vue-router'
Vue.use(VueRouter)



// 导入组件
import login from './components/login.vue';
import index from './components/index.vue';

// 规则
let router = [
    {
     path:"/login",
     components:login
    },
    {
        path:"/",
        components:index
    }
]

// 实例化路由对象
let router = new VueRouter({
    routes
})

// 暴露
export default router