import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:() => import('../views/Home/Home') 
  },
  {
    path:'/Community',
    component:() => import('../views/Community/Community') 
  },
  {
    path:'/Make',
    component:() => import('../views/Make/Make') ,
  },
  {
    path:'/User',
    component:() => import('../views/User/User') 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
