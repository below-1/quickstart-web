import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@quick/components/HelloWorld.vue'
import Landing from '@quick/components/landing/Landing.vue'
import AppLayout from '@quick/components/app/AppLayout.vue'
import Home from '@quick/components/app/Home.vue'
import SpotList from '@quick/components/app/spot/List.vue'
import SpotCreate from '@quick/components/app/spot/Create.vue'
import SpotDetail from '@quick/components/app/spot/SpotDetail.vue'
import SpotConfirmDelete from '@quick/components/app/spot/ConfirmDelete.vue'
import SpotUpdate from '@quick/components/app/spot/Update.vue'
import WeightEditor from '@quick/components/app/weights/WeightEditor.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/app', component: AppLayout, children: [
    { path: '', component: Home },
    { path: 'spots', component: SpotList },
    { path: 'spots/create', component: SpotCreate },
    { path: 'spots/:id', component: SpotDetail, props: true },
    { path: 'spots/:id/confirm-delete', component: SpotConfirmDelete, props: true },
    { path: 'spots/:id/update', component: SpotUpdate, props: true },
    { 
      path: 'weights',
      component: WeightEditor
    }
  ]}
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
