import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import GameOptions from '../views/GameOptions.vue'
import Ranking from '../views/Ranking.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game-options',
    name: 'GameOptions',
    component: GameOptions,
    // beforeEnter: protectedRoute,
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
