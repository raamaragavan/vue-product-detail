import { createWebHistory, createRouter } from "vue-router";
import Product from "./../components/productPage.vue";

/* eslint-disable */
const routes = [
  {
    path: '/',
    name: "Product-Page",
    component: Product,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;