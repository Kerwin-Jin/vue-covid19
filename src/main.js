import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/css/common.css"
import API from "@/api"

// 引入自定义插件
import echarts from "@/plugins/echarts"

// 引入echarts的地图文件
import "echarts/map/js/china"
import "echarts/map/js/world"
Vue.use(echarts);

// 引入全局组件
import MyComponent from "./components/MyComponent"
Vue.use(MyComponent);

import Tabs from "./components/Tabs"
Vue.use(Tabs)

// 将API挂载到原型上
Vue.prototype.$API = API;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
