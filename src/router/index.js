import Vue from 'vue'
import Router from 'vue-router'
import Showye from '@/components/index/Showye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Showye',
      component: Showye
    }
  ]
})
