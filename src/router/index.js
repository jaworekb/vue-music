import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Album from '../components/Album'
import Artist from '../components/Artist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/artist/:artistName',
      name: 'Artist',
      component: Artist
    }
  ]
})
