import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [{
    path: '/admin',
    name: 'admin',
    meta: {},
    component: () => import(/* webpackChunkIndex: "Index" */'./views/home.vue')
    // children: []
  },
  {
    path: '/admin/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }],
  history: createWebHistory()
})

export default router