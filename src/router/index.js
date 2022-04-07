import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: () => import(/* webpackChunkName: "editar" */ '../views/EditarView.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "agregar" */ '../views/AgregarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
