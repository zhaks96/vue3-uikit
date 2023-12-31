import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      name: 'index',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@/views/Button.vue')
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('@/views/Checkbox.vue')
    }
  ]
})

export default router