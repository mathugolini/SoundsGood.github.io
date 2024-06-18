import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Instrumentos from '../components/Instrumentos.vue'
import Artistas from '../components/Artistas.vue'
import Sobre from '../components/Sobre.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/instrumentos',
    name: 'instrumentos-component',
    component: Instrumentos
  },
  {
    path: '/artistas',
    name: 'artistas-component',
    component: Artistas
  },
  {
    path: '/sobre',
    name: 'sobre-component',
    component: Sobre
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
