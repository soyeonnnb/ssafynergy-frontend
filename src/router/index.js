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
        path: "",
        name: "home-view",
        component: () => import("@/components/HomeView.vue"),
      },
      {
        path: "challenge/search",
        name: "challenge-search-view",
        component: () => import("@/components/challenges/ChallengeList.vue"),
      },
      {
        path: "challenge/:id",
        name: "challenge-detail-view",
        component: () => import("@/components/challenges/ChallengeDetail.vue"),
      },
      {
        path: "challenge/search",
        name: "challenge-search", // 수정된 라우트 이름
        component: () => import("@/components/challenges/ChallengeSearch.vue"),
      },
      {
        path: "video",
        name: "video-view",
        component: () => import("@/components/videos/VideoView.vue"),
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
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("@/views/MyPageView.vue"),
    children: [
      {
        path: "",
        name: "mypage-main",
        component: () => import("@/components/mypages/MyMain.vue"),
      },
      {
        path: "current",
        name: "mypage-challenge-situation",
        component: () => import("@/components/mypages/MyCurrentSituation.vue"),
      },
      {
        path: "participate",
        name: "mypage-current-challegne",
        component: () => import("@/components/mypages/MyCurrentChallenge.vue"),
      },
      {
        path: "challenge/review",
        name: "mypage-review-write",
        component: () =>
          import("@/components/mypages/MyChallengeReviewWrite.vue"),
      },
      {
        path: "challenge/:id",
        name: "mypage-challenge-main",
        component: () => import("@/components/mypages/MyChallengeMain.vue"),
      },
      {
        path: "challenge/:id/:index",
        name: "mypage-challenge-detail",
        component: () => import("@/components/mypages/MyChallengeDetail.vue"),
      },
      {
        path: "board",
        name: "mypage-board",
        component: () => import("@/components/mypages/MyBoard.vue"),
      },
      {
        path: "info",
        name: "mypage-info",
        component: () => import("@/components/mypages/MyInfo.vue"),
      },
      {
        path: "info/update",
        name: "mypage-info-update",
        component: () => import("@/components/mypages/MyInfoUpdate.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/AdminView.vue"),
    children: [
      {
        path: "",
        name: "admin-main",
        component: () => import("@/components/admin/AdminMain.vue"),
      },
      {
        path: "challenge",
        name: "admin-challenge-list",
        component: () => import("@/components/admin/AdminChallengeList.vue"),
      },
      {
        path: "challenge/detail",
        name: "admin-challenge-detail",
        component: () => import("@/components/admin/AdminChallengeDetail.vue"),
      },
      {
        path: "challenge/create",
        name: "admin-challenge-create",
        component: () => import("@/components/admin/AdminChallengeCreate.vue"),
      },
      {
        path: "challenge/update",
        name: "admin-challenge-update",
        component: () => import("@/components/admin/AdminChallengeUpdate.vue"),
      },
      {
        path: "challenge/difficulty",
        name: "admin-challenge-difficulty",
        component: () =>
          import("@/components/admin/AdminChallengeDifficulty.vue"),
      },
      {
        path: "board",
        name: "admin-board-list",
        component: () => import("@/components/admin/AdminBoardList.vue"),
      },
      {
        path: "board/:id",
        name: "admin-board-detail",
        component: () => import("@/components/admin/AdminBoardDetail.vue"),
      },
      {
        path: "board/category/:id",
        name: "admin-board-category",
        component: () =>
          import("@/components/admin/AdminBoardCategoryList.vue"),
      },
      {
        path: "board/category/create",
        name: "admin-board-category-create",
        component: () =>
          import("@/components/admin/AdminBoardCategoryCreate.vue"),
      },
      {
        path: "board/category/update",
        name: "admin-board-category-update",
        component: () =>
          import("@/components/admin/AdminBoardCategoryUpdate.vue"),
      },
    ],
  },
  {
    path: "/community",
    name: "community",
    component: () => import("@/views/CommunityView.vue"),
    children: [
      {
        path: "detail/:id",
        name: "community-board-detail",
        component: () =>
          import("@/components/communities/CommunityBoardDetail.vue"),
      },
      {
        path: "create",
        name: "community-board-create",
        component: () =>
          import("@/components/communities/CommunityBoardCreate.vue"),
      },
      {
        path: "update",
        name: "community-board-update",
        component: () =>
          import("@/components/communities/CommunityBoardUpdate.vue"),
      },
      {
        path: ":id",
        name: "community-board",
        component: () =>
          import("@/components/communities/CommunityBoardList.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 일단 프론트에서 막고, 나중에 다시 막기
// router.beforeEach((to, from, next) => {
//   console.log(store.state.isloggedin);
//   if (to.name === "login" || to.name === "regist") {
//     next();
//   } else if (to.name.includes("admin") && !store.state.isAdmin) {
//     alert("접근 권한이 없습니다.");
//     next({ path: "home-view" });
//   } else if (!store.state.isloggedin) {
//     // next({
//     //   path: "login",
//     //   replace: true,
//     // });
//   }
// });

export default router;
