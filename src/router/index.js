import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store/index.js";

import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main-component",
    component: MainView,
    children: [
      {
        path: "/",
        name: "home-view",
        component: () => import("@/components/HomeView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/regist",
    name: "regist",
    component: () => import("@/views/RegistView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//일단 프론트에서 막고, 나중에 다시 막기
// router.beforeEach((to, from, next) => {
//   if (to.name === "login" || to.name === "regist") {
//     next();
//   } else {
//     next({
//       path: "login",
//       replace: true,
//     });
//   }
// });

export default router;
