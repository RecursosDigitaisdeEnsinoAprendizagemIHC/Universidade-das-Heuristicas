import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import GameOptions from '../views/GameOptions.vue'
import Ranking from '../views/Ranking.vue'
import About from '../views/About.vue'
import GameWelcome from '../views/GameWelcome.vue'
import Fases from '../views/Fases.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking,
  },
  {
    path: '/sobre-nos',
    name: 'About',
    component: About,
  },
  {
    path: '/game-options',
    name: 'GameOptions',
    component: GameOptions,
    // beforeEnter: protectedRoute,
  },
  {
    path: '/game-welcome',
    name: 'GameWelcome',
    component: GameWelcome,
    // beforeEnter: protectedRoute,
  },
  {
    path: '/fases',
    name: 'Fases',
    component: Fases,
    // beforeEnter: protectedRoute,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
