import Vue from 'vue'

export function searchRooms(data) {
    return Vue.axios.post('search', data)
}

export function reserveRoom(data) {
    return Vue.axios.post('reserve', data)
}
