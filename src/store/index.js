import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: '',
  },
  getters: {
    path: (state) => state.path,
  },
  mutations: {
    setPath(state, path) {
      state.path = path
    },
  },
})
