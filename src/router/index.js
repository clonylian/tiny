import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../view/home.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("../view/game.vue"),
  },
  {
    path: "/swap",
    name: "swap",
    component: () => import("../view/swap.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
