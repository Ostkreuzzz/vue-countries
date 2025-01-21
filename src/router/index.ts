import { createRouter, createMemoryHistory } from 'vue-router'

import NotFound from '@/views/NotFound.vue'
import CountryPage from '@/views/CountryPage.vue'
import MainPage from '@/views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/:country',
    name: 'CountryPage',
    component: CountryPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
