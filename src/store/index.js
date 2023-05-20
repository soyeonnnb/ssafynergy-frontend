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
