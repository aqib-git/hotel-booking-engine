import Vue from 'vue'
import App from './App.vue'

/* Element */
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import { DatePicker } from 'element-ui';

// configure language
locale.use(lang)

/* Tailwind */
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

/* Element */
Vue.use(DatePicker)

new Vue({
  render: h => h(App),
}).$mount('#app')
