// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/js/rem'
import 'common/stylus/index.styl'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MHead from '@/components/MHead'
import store from './store'

Vue.use(VueAwesomeSwiper)
Vue.component('m-head', MHead)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
