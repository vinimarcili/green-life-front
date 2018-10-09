import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage/HomePage'
import NotFound from '../pages/NotFound/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/',
    redirect: '/home'
  },
  { 
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },  
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
