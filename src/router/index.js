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
      path: '/frases',
      name: 'frases',
      component: () => import('../views/CardsView.vue')
    },
    {
      path: '/lembrancas',
      name: 'lembrancas',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/TimelineView.vue')
    },
    {
      path: '/quem',
      name: 'quem',
      component: () => import('../views/FeaturedView.vue')
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/BusinessCard.vue')
    }
  ]
})

export default router
