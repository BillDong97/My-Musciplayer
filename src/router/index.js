import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/weather'
import musicPlayer from '@/components/musicPlayer'
import counter from '@/components/counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: musicPlayer
    },
    {
      path: '/counter',
      component: counter
    },
    {
      path: '/weather',
      component: Weather
    }
  ]
})
