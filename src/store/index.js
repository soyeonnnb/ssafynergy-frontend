import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import http from "@/util/httpCommon";

import { createVuexPersistedState } from "vue-persistedstate";

Vue.use(Vuex);

const JSON_HEADER = {
  "Content-type": "application/json",
};
// const FILE_HEADER = {
//   "Content-type": "application/json",
// };
export default new Vuex.Store({
  state: {
    user: {},
    isloggedin: false,
    loginUser: {},
    boardCategories: [],
    boardCategory: {},
    posts: [],
    post: {},
  },
  getters: {
    user(state) {
      return state.user;
    },
    loginUser(state) {
      return state.loginUser;
    },
  },
  mutations: {
    USER_LOGIN(state, payload) {
      // state.loginUser = sessionStorage.getItem("access-token");
      state.loginUser = payload;
      state.isloggedin = true;
    },
    CLEAR_USER(state) {
      state.user = {};
    },
    SET_USER_DATA(state, payload) {
      state.user = payload;
    },
    SET_LOGIN_USER_DATA(state, payload) {
      state.loginUser = payload;
    },
    LOGOUT(state) {
      state.isloggedin = false;
      state.loginUser = {};
    },
    SET_BOARD_CATEGORIES(state, payload) {
      state.boardCategories = payload;
    },
    SET_BOARD_CATEGORY(state, payload) {
      state.boardCategory = payload;
    },
    BOARD_CATEGORY_CLEAR(state) {
      state.boardCategory = {};
    },
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
    POST_CLEAR(state) {
      state.post = {};
    },
    POSTS_CLEAR(state) {
      state.posts = [];
    },
  },
  actions: {
    async userRegist({ commit }, payload) {
      await http
        .post("/user", payload, { headers: JSON_HEADER })
        .then(() => {
          alert("아이디 생성 성공 !");
          commit("CLEAR_USER");
        })
        .catch((err) => {
          // const error = { ...err };
          const err_msg = err.response.data;
          if (err_msg == "existsUserId") {
            alert("중복 아이디입니다.");
          } else if (err_msg == "existsNickname") {
            alert("중복 닉네임입니다.");
          }
          throw new Error("생성 실패");
        });
    },
    async userLogin({ commit }, payload) {
      await http
        .post("/user/login", payload, { headers: JSON_HEADER })
        .then((res) => {
          sessionStorage.setItem("access-token", res.data["access-token"]);
          sessionStorage.setItem(
            "loginUser",
            JSON.stringify(res.data.loginUser)
          );
          commit("USER_LOGIN", res.data["loginUser"]);
        })
        .catch(() => {
          throw new Error("아이디 혹은 비밀번호가 틀렸습니다.");
        });
    },
    kakaoLogin() {
      const uri = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.VUE_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.VUE_APP_KAKAO_REDIRECT_URI}&response_type=code`;
      http.get(uri).then((res) => {
        console.log(res);
      });
    },
    getUserInfo({ commit }, payload) {
      http.get(`/user/${payload}`).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
    setLoginUserInfo({ commit }) {
      const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
      http.get(`/user/${loginUser.id}`).then(({ data }) => {
        commit("SET_LOGIN_USER_DATA", data);
      });
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
    userInfoUpdate({ dispatch }, payload) {
      const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
      payload.id = loginUser.id;
      http
        .put(`/user`, payload)
        .then(() => {
          dispatch("setLoginUserInfo");
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBoardCategoryAll({ commit }) {
      http.get("/board/category").then(({ data }) => {
        commit("SET_BOARD_CATEGORIES", data);
      });
    },
    getBoardCategory({ commit }, payload) {
      http
        .get(`/board/category/${payload}`)
        .then(({ data }) => {
          commit("SET_BOARD_CATEGORY", data);
        })
        .catch(() => {
          console.log("글 없음");
        });
    },
    boardCategoryClear({ commit }) {
      commit("BOARD_CATEGORY_CLEAR");
    },
    categoryCreate({ commit }, payload) {
      commit;
      http.post("/board/category", payload).then(({ status }) => {
        if (status === 201) {
          alert("카테고리가 생성되었습니다.");
        }
      });
    },
    getPosts({ commit }, payload) {
      let url = "/board/search?";
      if (payload.key) {
        url += `key=${payload.key}&content=${payload.content}`;
      } else {
        url += "key=none";
      }
      if (payload.hasUserId) {
        url += `&hasUserId=true&userId=${payload.userId}}`;
      }
      if (payload.hasBoardCategoryId) {
        url += `&hasBoardCategoryId=true&boardCategoryId=${payload.boardCategoryId}`;
      }
      if (payload.orderBy) {
        url += `&orderBy=${payload.orderBy}&orderByDir=${payload.orderByDir}`;
      }
      console.log(url);
      http.get(url).then(({ data, status }) => {
        if (status === 200) {
          commit("SET_POSTS", data);
        }
      });
    },
    postsClear({ commit }) {
      commit("POSTS_CLEAR");
    },
    postClear({ commit }) {
      commit("POST_CLEAR");
    },
    getBoardCategoryForUser({ commit }) {
      http.get("/board/category/foruser").then(({ data }) => {
        commit("SET_BOARD_CATEGORY", data);
      });
    },
    boardPostCreate({ state }, payload) {
      payload.userId = state.loginUser.id;
      http
        .post("/board/post", payload)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {},
  plugins: [
    createVuexPersistedState({
      whiteList: ["isloggedin", "loginUser"],
      key: "vuexStore",
      storage: window.sessionStorage, // sessionStorage에 저장
    }),
  ],
});
