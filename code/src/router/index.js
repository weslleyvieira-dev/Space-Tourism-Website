import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Destination from "../pages/Destination.vue";
import Crew from "../pages/Crew.vue";
import Technology from "../pages/Technology.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/destination", name: "Destination", component: Destination },
  { path: "/crew", name: "Crew", component: Crew },
  { path: "/technology", name: "Technology", component: Technology },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

export default router;
