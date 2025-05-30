import { createRouter, createWebHistory } from 'vue-router'
import home from '@/router/routes/home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //разбиение на модули для больших проектов. Здесь использовано для примера
    ...home,
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('../views/FavouritesView.vue'),
    },
    //динамический роутинг
    {
      path: '/product/:id',
      name: 'product-item',
      component: () => import('../views/ProductView.vue'),
    },
        {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
