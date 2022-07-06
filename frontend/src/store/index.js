import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dropMenu: false
  },
  getters: {
    getDropdownStatus(state){
      return state.dropMenu
    }
  },
  mutations: {
    dropdownStatus(state){
      if(state.dropMenu == false){
      return state.dropMenu = true
      }
      
      if(state.dropMenu == true){
        return state.dropMenu = false
      }
    }
  },
  actions: {

  },
  modules: {

  }
})
