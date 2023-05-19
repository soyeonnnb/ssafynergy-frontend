import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/httpCommon";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    CLEAR_USER(state) {
      state.user = {};
    },
  },
  actions: {
    async userRegist({ commit }, payload) {
      await http
        .post("/user", payload)
        .then(() => {
          alert("아이디 생성 성공 !");
          commit("CLEAR_USER");
        })
        .then((res) => {
          console.log(`res: ${res}`);
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
  },
  modules: {},
});
