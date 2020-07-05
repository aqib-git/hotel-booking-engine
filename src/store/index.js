import Vue from 'vue'
import Vuex from 'vuex'
import BookingModule from '@/store/modules/booking'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
      'booking': BookingModule
  }
})

export default store