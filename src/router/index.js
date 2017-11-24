import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index.vue'
import Classify from '@/pages/Classify/index.vue'
import ShopCart from '@/pages/ShopCart/index.vue'
import Personal from '@/pages/Personal/index.vue'
import Search from '@/pages/Search/index.vue'
import { Fruit, Egg, Meat, SeaFood, CoolDrink } from '@/pages/Classify/subpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
