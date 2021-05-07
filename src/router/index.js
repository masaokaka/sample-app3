import Vue from 'vue'
import VueRouter from 'vue-router'
import Addresses from '../views/Addresses.vue'
import AddressForm from '../views/AddressForm.vue'
import Home from '../views/Home.vue'
import Price from '../views/Price.vue'
import Disp1 from '@/components/Disp1.vue'
import Disp2 from '@/components/Disp2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/addresses',
    name:'addresses',
    component:Addresses,
  },
  {
    path:'/addresses/:address_id?/edit',
    name:'address_edit',
    component:AddressForm,
    props:true
  },
  {
    path:'/price',
    name:'price',
    component:Price,
    children:[
      {path:'disp1',component:Disp1},
      {path:'disp2',component:Disp2}
    ]
  },
]

const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes
})

export default router
