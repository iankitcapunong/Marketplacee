import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '@/views/auth/LogInView.vue'
import DashboardView from '@/views/auth/DashboardView.vue'
import CategoriesView from '@/views/auth/CategoriesView.vue'
import AccountSettingsView from '@/views/auth/AccountSettingsView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LogInView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
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
    {
      path: '/accountsettings',
      name: 'AccountSettings',
      component: AccountSettingsView,
    },
  ],
})

export default router
