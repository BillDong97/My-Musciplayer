import Vue from 'vue'
import Router from 'vue-router'
import musicPlayer from '@/components/musicPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: musicPlayer
    }
  ]
})
