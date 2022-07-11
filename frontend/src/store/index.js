import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'
const token = localStorage.getItem('token')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dropMenu: false,
    userId: '',
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirm_password: ''
  },
  getters: {
    getDropdownStatus(state) {
      return state.dropMenu
    },
    getUserId(state) {
      return state.userId
    },
    getToken() {
      return localStorage.getItem('token')
    }
  },
  mutations: {
    dropdownStatus(state) {
      if (state.dropMenu == false) {
        return state.dropMenu = true
      }

      return state.dropMenu = false
    },

    logout(state) {
      return localStorage.clear(),
        state.userId = '',
        router.push('/login'),
        console.log('TOKEN =>', localStorage.getItem('token'))
    },

    getSignupLastname(state, payload) {
      return state.lastname = payload.target.form[0].value,
        console.log('lastname:', payload.target.form[0].value)
    },

    getSignupFirstname(state, payload) {
      return state.firstname = payload.target.form[1].value,
        console.log('firstname:', payload.target.form[1].value)
    },

    getSignupEmail(state, payload) {
      return state.email = payload.target.form[2].value,
        console.log('email:', payload.target.form[2].value)
    },

    getSignupPassword(state, payload) {
      return state.password = payload.target.form[3].value,
        console.log('password:', payload.target.form[3].value)
    },

    getSignupConfirmPassword(state, payload) {
      return state.confirm_password = payload.target.form[4].value,
        console.log('confirm_password:', payload.target.form[4].value)
    },

    getLoginEmail(state, payload) {
      return state.email = payload.target.form[0].value,
        console.log('email:', payload.target.form[0].value)
    },

    getLoginPassword(state, payload) {
      return state.password = payload.target.form[1].value,
        console.log('password:', payload.target.form[1].value)
    }
  },
  actions: {
    header() {
      return {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    },

    async register(state) {
      try {
        const user = {
          'lastname': state.state.lastname,
          'firstname': state.state.firstname,
          'email': state.state.email,
          'password': state.state.password,
          'confirm_password': state.state.confirm_password
        }

        console.log('STATE =>', state.state)
        console.log('USER TO REGISTER =>', user)

        const res = await axios.post(`${API_URL}/users/register`, user)
        return res.data,
          router.push('/login')
      }
      catch (error) {
        return error
      }
    },

    async login(state) {
      try {
        const user = {
          'email': state.state.email,
          'password': state.state.password
        }

        console.log('STATE =>', state.state)
        console.log('USER TO LOGIN =>', user)

        const res = await axios.post(`${API_URL}/users/login`, user)
        return res.data,
          console.log('RES.DATA =>', res.data),
          state.state.userId = parseInt(res.data.userId),
          console.log('STATE.USERID =>', state.state.userId),
          localStorage.setItem('token', res.data.token),
          console.log('LS TOKEN =>', localStorage.getItem('token')),
          router.push('/welcome')
      }
      catch (error) {
        return error
      }
    },
  },
  modules: {

  }
})
