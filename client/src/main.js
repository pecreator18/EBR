import Vue from 'vue'
import App from './App.vue'
import vueSignature from "vue-signature"

Vue.config.productionTip = false

Vue.use(vueSignature)


new Vue({
  render: h => h(App),
}).$mount('#app')
