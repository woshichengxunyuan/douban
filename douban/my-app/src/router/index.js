import Vue from 'vue'
import Router from 'vue-router'

import Index from '../index'
import Navbar from '../pages/navbar'
import Movies from '../pages/movies'
import Tv from '../pages/tv'
import Books from '../pages/books'
import Test from '../components/test'
import City from '../pages/city'
import Teams from '../pages/teams'
import Music from '../pages/music'
import Read from '../pages/read'
import Play from '../pages/play'
import Phoneuse from '../pages/phoneuse'
import Radio from '../pages/radio'
import Fm from '../pages/fm'
import Doupin from '../pages/doupin'
import Details from '../pages/datails'
import Dz from '../pages/dz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/tv',
      name: 'Tv',
      component: Tv
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/phoneuse',
      name: 'Phoneuse',
      component: Phoneuse
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/fm',
      name: 'Fm',
      component: Fm
    },
    {
      path: '/doupin',
      name: 'Doupin',
      component: Doupin
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/dz',
      name: 'Dz',
      component: Dz
    },
    {path:"*/",redirect:"/index"}
  ]
})
