import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* Bootstrap */

/* Font Awesome */
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
/* Font Awesome */

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
