import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Users from '@/page/Users'
import Open1999 from '@/page/Open1999'
import Counter from '@/page/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/open1999',
      name: 'Open1999',
      component: Open1999
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
