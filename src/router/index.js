import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index.vue'
import content from '../view/content.vue'
import login from '../view/login.vue'
import my from '../view/my.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
