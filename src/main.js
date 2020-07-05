import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router' 
import App from './App.vue'
import store from './store'

/* Element */
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import { DatePicker, InputNumber } from 'element-ui'

// configure language
locale.use(lang)

/* Tailwind */
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

/* Element Components */
Vue.use(DatePicker)
Vue.use(InputNumber)

/* Axios */
Vue.use(VueAxios, axios.create({
  baseURL: 'https://y6bp6qz2xe.execute-api.us-east-1.amazonaws.com/dev/api/v1/201/ibe/'
}))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
