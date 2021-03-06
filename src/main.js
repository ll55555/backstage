import Vue from 'vue'
import App from './App.vue'

// 导入全局样式
import './assets/base.scss'

// 导入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// 导入路由
import router from './router.js'

new Vue({
  render: h => h(App),
  // 挂载到Vue实例上
  router
}).$mount('#app')

