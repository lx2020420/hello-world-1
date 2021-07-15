import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import store from './store'
// import axios from 'axios'
//git test

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//aaaaaaaaaa

=======

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
>>>>>>> cfc6826cdcf0e4d8b48ad84a89b5bbbfc10bef2e
