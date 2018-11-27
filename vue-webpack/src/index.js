import Vue from 'vue'
import App from './app.vue'

let div = document.createElement('div');
document.body.appendChild(div)

let app = new Vue({
  render: (h) => h(App)
}).$amount(div)