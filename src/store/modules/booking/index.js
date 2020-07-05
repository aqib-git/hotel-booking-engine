import * as BookingApi from '@/api/booking'

const state = {
  search: {
    nr_adults: 2,
    nr_child: 0,
    arrival_date: '',
    departure_date: ''
  },
  reservation: '',
  rooms: []
}

const getters = {
  search (state) {
    return state.search
  },
  rooms (state) {
    return state.rooms
  },
  reservation (state) {
    return state.reservation
  }
}

const actions = {
  searchRooms (context, data) {
    return BookingApi.searchRooms(data)
  },
  updateSearch (context, data) {
    context.commit('updateSearch', data)
  },
  updateRooms (context, data) {
    context.commit('updateRooms', data)
  },
  reserveRoom (context, data) {
    return BookingApi.reserveRoom(data)
  },
  reserveRoomSuccess (context, data) {
    context.commit('reserveRoomSuccess', data)
  },
  resetReservation (context) {
    context.commit('resetReservation')
  }
}

const mutations = {
  updateSearch (state, data) {
    state.search = data
  },
  updateRooms (state, data) {
    state.rooms = data
  },
  reserveRoomSuccess (state, data) {
    state.reservation = data
  },
  resetReservation (state) {
    state.reservation = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
