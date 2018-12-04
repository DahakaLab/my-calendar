import Vue from 'vue'
import App from './App.vue'

require('./autoload.scss');

new Vue({
  el: '#app',
  render: h => h(App)
});
