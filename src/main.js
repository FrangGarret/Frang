// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import './assets/css/home.css'
import VueBarcode from '@xkeshi/vue-barcode'; 
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import $ from 'jquery'
import 'babel-polyfill'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)
Vue.prototype.$axios = Axios;
Vue.use(VueAxios,Axios)
Vue.prototype.HOST ='/api'
Vue.component('barcode', VueBarcode); 
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
