import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/weather'
import musicPlayer from '@/components/musicPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: musicPlayer
    },
    {
      path: '/weather',
      component: Weather
    }
  ]
})
