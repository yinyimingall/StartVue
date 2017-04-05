import Vue from 'vue'
import Router from 'vue-router'

import firstPage from '../pages/firstpage.vue'
import secondPage from '../pages/secondpage.vue'
import thirdPage from '../pages/thirdpage.vue'
import sub1 from '../components/sub1.vue'
import sub2 from '../components/sub2.vue'
import sub3 from '../components/sub3.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: firstPage
    },
    {
      path: '/second',
      name: 'second',
      component: secondPage,
      children: [
        {
          path: 'sub1',
          component: sub1
        },
        {
          name: 'sub2name',
          path: 'sub2',
          component: sub2
        },
        {
          path: 'sub3',
          component: sub3
        }
      ]
    },
    {
      path: '/third',
      name: 'third',
      component: thirdPage
    }
  ]
})
