import Vue from 'vue'
import VueFire from 'vuefire'
import './firebase'
import './assets/sass/main.scss'
import App from './App.vue'

Vue.use(VueFire);

new Vue({
  el: '#app',
  render: h => h(App),
})