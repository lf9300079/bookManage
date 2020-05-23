import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld.vue'
import index from '@/pages/index.vue'
import base from '@/pages/base.vue'
import book from '@/pages/book.vue'
import store from '@/store/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: HelloWorld
    },
    {
      path: '/base',
      name: 'base',
      component: base,
      children: [
        { path: 'index', name: 'index', component: index },
        { path: 'book', name: 'book', component: book },
      ],
    }

  ]
})
