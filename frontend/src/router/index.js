import Vue from 'vue'
import VueRouter from 'vue-router'

import SignupView from '@/views/SignupView'
import LoginView from '@/views/LoginView'
import WelcomeView from '@/views/WelcomeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: SignupView
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/location',
    name: 'location',
   
  },
  {
    path: '/chat',
    name: 'chat',
   
  },
  {
    path: '/photos',
    name: 'photos',
  
  },
  {
    path: '/journey',
    name: 'journey',
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
