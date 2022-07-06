import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dropMenu:false,
    lastname:'',
    firstname:'',
    email:'',
    password:'',
    confirm_password:''
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
    },
    getLastname(state, payload){
      return state.lastname = payload.target.form[0].value,
      console.log('lastname', payload.target.form[0].value)
    },
    getFirstname(state, payload){
      return state.firstname = payload.target.form[1].value,
      console.log('firstname', payload.target.form[1].value)
    },
    getEmail(state, payload){
      return state.email = payload.target.form[2].value,
      console.log('email', payload.target.form[2].value)
    },
    getPassword(state, payload){
      return state.password = payload.target.form[3].value,
      console.log('password', payload.target.form[3].value)
    },
    getConfirmPassword(state, payload){
      return state.confirm_password = payload.target.form[4].value,
      console.log('confirm_password', payload.target.form[4].value)
    }
  },
  actions: {

  },
  modules: {

  }
})
