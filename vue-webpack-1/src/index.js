import Vue from 'vue'
import App from './app.vue'

let div = document.createElement('div')
document.body.appendChild(div)

if (env) {
  console.log(env);
}

new Vue({
  render: (h) => h(App)
}).$mount(div)