import Vue from 'vue'
import VueRouter from 'vue-router'
import Atividade from '../views/Atividade.vue'

Vue.use(VueRouter)

const routes = [
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
