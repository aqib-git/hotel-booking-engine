import * as BookingApi from '@/api/booking'

const state = {
  search: {
    nr_adult: 2,
    nr_child: 0,
    arrival_date: '',
    departure_date: ''
  },
  rooms: []
}

const getters = {
  search (state) {
    return state.search
  },
  rooms (state) {
    return state.rooms
  }
}

const actions = {
  searchRooms (context, data) {
    return BookingApi.search(data)
  },
  updateSearch (context, data) {
    context.commit('updateSearch', data)
  },
  updateRooms (context, data) {
    context.commit('updateRooms', data)
  }
}

const mutations = {
  updateSearch (state, data) {
    state.search = data
  },
  updateRooms (state, data) {
    state.rooms = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
