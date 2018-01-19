import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Users from '@/page/Users'
import Open1999 from '@/page/Open1999'
import Counter from '@/page/Counter'
import Signup from '@/page/Signup'
import Signin from '@/page/Signin'
import Dashboard from '@/page/Dashboard'
import ControlPanel from '@/page/ControlPanel'
import Foods from '@/page/Foods'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/controlpanel',
      name: 'ControlPanel',
      component: ControlPanel
    },
    {
      path: '/foods',
      name: 'Foods',
      component: Foods
    }
  ]
})
