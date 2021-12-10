import Vue from 'vue'
import VueRouter from 'vue-router'
import Perfil from '../components/Perfil.vue'
import Conocimientos from '../components/Conocimientos.vue'
import Intereses from '../components/Intereses.vue'
import Experiencia from '../components/Experiencia.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/conocimientos',
    name: 'conocimientos',
    component: Conocimientos
  },
  {
    path: '/intereses',
    name: 'intereses',
    component: Intereses
  },
  {
    path: '/experiencia',
    name: 'experiencia',
    component: Experiencia
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
