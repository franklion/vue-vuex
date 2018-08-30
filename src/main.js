// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


// import $ from 'jquery'
// import 'jquery-ui'
// require("jquery-ui")


import $ from './assets/libs/jquery/js/jquery-3.3.1.min.js'
import './assets/libs/jquery-ui/js/jquery-ui.js'
import './assets/libs/jquery-ui/css/jquery-ui.css'

Vue.config.productionTip = false

export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})

