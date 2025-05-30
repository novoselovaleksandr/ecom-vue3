import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //Стоит писать только так, для загрузки только во время посещения. Закомментированный вариант выше не использовать.
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
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
