import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Atividade from '../views/Atividade.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/atividade',
    name: 'Atividade',
    component: Atividade
  }  
]

const router = new VueRouter({
  routes
})

export default router
