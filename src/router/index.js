import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import TabPage from '@/views/TabPage'
import TabPage2 from '@/views/TabPage2'
import TabPage3 from '@/views/TabPage3'
import VueTabsChrome from '@/views/vue-tabs-chrome'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
    {
      path: '/tab-page',
      name: 'TabPage',
      component: TabPage
    },
    {
      path: '/tab-page2',
      name: 'TabPage2',
      component: TabPage2
    },
    {
      path: '/tab-page3',
      name: 'TabPage3',
      component: TabPage3
    },
    {
      path: '/vue-tabs-chrome',
      name: 'VueTabsChrome',
      component: VueTabsChrome
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
