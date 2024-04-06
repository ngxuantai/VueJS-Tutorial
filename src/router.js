import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/home.vue";
import ProductPage from "./pages/product.vue";
import ProductDetailPage from "./pages/product-detail.vue";
import NotFoundPage from "./pages/not-found.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/product",
    name: "product",
    component: ProductPage,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetailPage,
  },
  {
    path: "/pd",
    redirect: "/product",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
