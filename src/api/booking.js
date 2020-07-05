import Vue from 'vue'

export function search(data) {
    return Vue.axios.post('search', data)
}