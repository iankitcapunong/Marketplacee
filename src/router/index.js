import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '@/views/auth/LogInView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'
import DashboardView from '@/views/auth/DashboardView.vue'
import CategoriesView from '@/views/auth/CategoriesView.vue'

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
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: CategoriesView,
    },
  ],
})

export default router
