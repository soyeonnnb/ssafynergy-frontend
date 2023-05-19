import Vue from "vue";
import VueRouter from "vue-router";
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

router.beforeEach((to, from, next) => {
  if (
    to.name === "login" ||
    to.name === "regist" ||
    !this.$store.state.isloggedin
  ) {
    next();
  } else {
    next({
      path: "login",
      replace: true,
    });
  }
});

export default router;
