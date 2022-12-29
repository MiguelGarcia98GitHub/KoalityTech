import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CartPage from "../views/CartPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
