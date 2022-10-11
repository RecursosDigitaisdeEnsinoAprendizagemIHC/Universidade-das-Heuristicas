import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import GameOptions from '../views/GameOptions.vue'
import Ranking from '../views/Ranking.vue'
import About from '../views/About.vue'
import GameWelcome from '../views/GameWelcome.vue'
import Fases from '../views/Fases.vue'
import AlertView from '../views/AlertView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/alert-view',
    name: 'AlertView',
    component: AlertView,
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
  },
  {
    path: '/game-welcome',
    name: 'GameWelcome',
    component: GameWelcome,
  },
  {
    path: '/fases',
    name: 'Fases',
    component: Fases,

  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
