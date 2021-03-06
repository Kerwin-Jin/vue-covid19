import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/Home')
  },
  {
    path:"/about",
    component:()=> import('@/views/About')
  },
  { path: '*', redirect: '/'}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
