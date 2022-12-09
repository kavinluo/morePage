import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [{
    path: '/',
    name: 'index',
    meta: {},
    component: () => import(/* webpackChunkIndex: "Index" */'./views/index.vue')
    // children: []
  }, {
    path: '/about',
    name: 'about',
    component: () => import('./views/about.vue')
  }
],
  history: createWebHistory()
})

export default router