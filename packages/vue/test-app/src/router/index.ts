import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/overlays',
    name: 'Overlays',
    component: () => import('@/views/Overlays.vue')
  },
  {
    path: '/inputs',
    name: 'Inputs',
    component: () => import('@/views/Inputs.vue')
  },
  {
    path: '/slides',
    name: 'Slides',
    component: () => import('@/views/Slides.vue')
  },
  {
    path: '/default-href',
    component: () => import('@/views/DefaultHref.vue')
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: () => import('@/views/Navigation.vue')
  },
  {
    path: '/navigation/child',
    component: () => import('@/views/NavigationChild.vue')
  },
  {
    path: '/nested',
    name: 'RouterOutlet',
    component: () => import('@/views/RouterOutlet.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/NestedChild.vue')
      },
      {
        path: 'two',
        component: () => import('@/views/NestedChildTwo.vue')
      }
    ]
  },
  {
    path: '/tabs/',
    component: () => import('@/views/Tabs.vue'),
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
        children: [
          {
            path: 'child-one',
            component: () => import('@/views/Tab1ChildOne.vue')
          },
          {
            path: 'child-two',
            component: () => import('@/views/Tab1ChildTwo.vue')
          }
        ]
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
