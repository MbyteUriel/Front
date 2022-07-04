import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'home',
    component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsByCategoryView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('../views/ContactView.vue')
    },
    {
      path: '/product-details/:id',
      name: 'product-details',
      component: () => import('../views/ProductDetailsView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
  ],
})

export default router
