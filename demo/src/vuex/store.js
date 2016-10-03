import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  hello: 'world'
}

const mutations = {
  Foo (state) {
    console.log(state)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
