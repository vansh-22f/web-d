import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProductDetails from "../views/ProductDetails.vue"
const routes = [

{
  path: "/",
  component: HomeView
},

{
  path: "/products",
  component: ProductsView
},
{
    path:"/products/:id",
    component:ProductDetails
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router