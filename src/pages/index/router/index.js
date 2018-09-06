import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexSearch from '@/components/IndexSearch'
import ImageGarden from '@/components/ImageGarden'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'IndexSearch',
      component: IndexSearch
    },
    {
      path: '/image',
      name: 'ImageGarden',
      component: ImageGarden
    }
  ]
})
