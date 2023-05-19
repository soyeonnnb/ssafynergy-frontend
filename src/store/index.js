import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import http from "@/util/httpCommon";

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
  },
  mutations: {
    USER_LOGIN(state) {
      state.loginUser = sessionStorage.getItem("access-token");
      state.isloggedin = true;
    },
    CLEAR_USER(state) {
      state.user = {};
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
          // console.log(res);
          // console.log(res.data["access-token"]);
          sessionStorage.setItem("access-token", res.data["access-token"]);
          commit("USER_LOGIN");
        })
        .catch(() => {
          throw new Error("아이디 혹은 비밀번호가 틀렸습니다.");
        });
    },
  },
  modules: {},
});
