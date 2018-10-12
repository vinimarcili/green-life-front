import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
 
/* Bootstrap */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
/* Bootstrap */

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDizzy, faLeaf, faMapMarker, faCircleNotch, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add([
  faDizzy,
  faLeaf,
  faMapMarker,
  faCircleNotch,
  faCog
])
Vue.component('font-awesome-icon', FontAwesomeIcon)
/* Font Awesome */

/* Vue Resource */
import VueResource from 'vue-resource'
Vue.use(VueResource)
/* Vue Resource */

/* Components */
import SearchForm from './components/SearchForm/SearchForm'
Vue.component('search-form', SearchForm)

import CountrySelect from './components/CountrySelect/CountrySelect'
Vue.component('country-select', CountrySelect)

import StateSelect from './components/StateSelect/StateSelect'
Vue.component('state-select', StateSelect)

import CitySelect from './components/CitySelect/CitySelect'
Vue.component('city-select', CitySelect)
/* Components */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
