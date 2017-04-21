import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '../pages/home.vue'
import OtherOne from '../pages/other-one.vue'
import OtherTwo from '../pages/other-two.vue'
import moreMovies from '../components/moreMovies.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/home/moreMovies',
      name: 'moreMovies',
      component: moreMovies
    },
    {
      path: '/other1',
      name: 'other1',
      component: OtherOne
    },
    {
      path: '/other2',
      name: 'other2',
      component: OtherTwo
    }
  ]
})
