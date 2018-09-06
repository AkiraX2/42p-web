import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Portal from '@/components/Portal'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Portal',
      component: Portal
    } 
  ]
})
