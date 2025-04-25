import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '@/views/auth/LogInView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LogInView,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpView,
    },
  ],
})

export default router
