import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    // 只有首页不异步
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:"/news",
    name:"news",
    // 这是异步加载方式
    // 如果这个页面没显示，这个代码不会被执行，节省代码空间
    component:() => import("../views/NewsView.vue")
  },
  {
    // :name代表参数
    path:"/newsdetails/:name",
    name:"newsdetails",
    component:() =>import("../views/NewsDetailsView.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
