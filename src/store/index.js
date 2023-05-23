import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/httpCommon";

import { createVuexPersistedState } from "vue-persistedstate";
// import challengeStore from "./modules/challengeStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    isloggedin: false,
    loginUser: {},
    isAdmin: false,
    followerUsers: [],
    followingUsers: [],
    isFollow: false,
    boardCategories: [],
    boardCategory: {},
    posts: [],
    post: {},
    postComments: [],
    postComment: {},
    youtubeVideos: [],
    challenges: [],
    challenge: {},
    challengesSort: [], // challengesSort 배열 추가
    reviews: [],
    isParticipate: false,
    challengeIngs: [],
    challengeIng: {},
  },
  getters: {
    user(state) {
      return state.user;
    },
    loginUser(state) {
      return state.loginUser;
    },
    challenges(state) {
      return state.challenges;
    },
    challenge(state) {
      return state.challenge;
    },
    challengesSort(state) {
      return state.challengesSort;
    },
    reviews(state) {
      return state.reviews;
    },
    isParticipate(state) {
      return state.isParticipate;
    },
  },
  mutations: {
    USER_LOGIN(state, payload) {
      // state.loginUser = sessionStorage.getItem("access-token");
      state.loginUser = payload;
      state.isloggedin = true;
      if (payload.type === "A") state.isAdmin = true;
    },
    CLEAR_USER(state) {
      state.user = {};
      state.followUsers = [];
      state.followingUsers = [];
      state.isFollow = false;
    },
    SET_USER_DATA(state, payload) {
      state.user = payload;
    },
    SET_LOGIN_USER_DATA(state, payload) {
      state.loginUser = payload;
      state.user = payload;
      if (payload.type === "A") state.isAdmin = true;
    },
    LOGOUT(state) {
      state.isloggedin = false;
      state.loginUser = {};
      state.isAdmin = false;
      state.user = {};
      state.followUsers = [];
      state.followingUsers = [];
      state.isFollow = false;
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
    SET_POST(state, payload) {
      state.post = payload;
    },
    SET_POST_ID(state, payload) {
      state.post.id = payload;
    },
    POST_CLEAR(state) {
      state.post = {};
    },
    POSTS_CLEAR(state) {
      state.posts = [];
    },
    SET_POST_VIEWCNT_UP(state) {
      state.post.viewCnt++;
    },
    SET_POST_COMMENTS(state, payload) {
      state.postComments = payload;
    },
    SET_POST_LIKE(state, payload) {
      state.post.isLike = payload;
    },
    SET_YOUTUBE_VIDEOS(state, payload) {
      state.youtubeVideos = payload;
    },
    SET_IS_FOLLOW(state, payload) {
      state.isFollow = payload;
    },
    SET_FOLLOWER_LIST(state, payload) {
      state.followerUsers = payload;
    },
    SET_FOLLOWING_LIST(state, payload) {
      state.followingUsers = payload;
    },
    setChallenges(state, payload) {
      state.challenges = payload;
    },
    setChallenge(state, payload) {
      state.challenge = payload;
    },
    setChallengesSort(state, payload) {
      state.challengesSort = payload; // challengesSort 배열 할당
    },
    setReviews(state, payload) {
      state.reviews = payload;
    },
    SET_IS_PARTICIPATE(state, payload) {
      state.isParticipate = payload;
    },
    SET_CHALLENGE_INGS(state, payload) {
      state.challengeIngs = payload;
    },
    SET_CHALLENGE_ING(state, payload) {
      state.challengeIng = payload;
    },
    CLEAR_CHALLENGE_ING(state) {
      state.challengeIng = {};
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
        .post("/user/login", payload)
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
    kakaoLogin() {},
    getUserInfo({ commit }, payload) {
      http
        .get(`/user/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
    getIsFollow({ commit, state }, payload) {
      if (state.loginUser.id == payload) return;
      http
        .get(`/follow/${state.loginUser.id}/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          if (data == "yes") {
            commit("SET_IS_FOLLOW", true);
          } else {
            commit("SET_IS_FOLLOW", false);
          }
        });
    },
    getFollowingList({ commit }, payload) {
      http.get(`/follow/following/${payload}`).then(({ data }) => {
        commit("SET_FOLLOWING_LIST", data);
      });
    },
    getFollowerList({ commit }, payload) {
      http.get(`/follow/${payload}`).then(({ data }) => {
        commit("SET_FOLLOWER_LIST", data);
      });
    },
    doFollow({ commit }, payload) {
      http
        .post("/follow", payload, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          commit("SET_IS_FOLLOW", true);
        })
        .catch((err) => console.log(err));
    },
    cancelFollow({ commit }, payload) {
      http
        .delete(`/follow/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          commit("SET_IS_FOLLOW", false);
        })
        .catch((err) => console.log(err));
    },
    setLoginUserInfo({ commit, state }) {
      http
        .get(`/user/${state.loginUser.id}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          commit("SET_LOGIN_USER_DATA", data);
        })
        .catch((err) => console.log(err));
    },
    logout({ commit }) {
      http.get("/user/logout");
      sessionStorage.removeItem("loginUser");
      sessionStorage.removeItem("access-token");
      commit("LOGOUT");
    },
    userInfoUpdate({ dispatch }, payload) {
      const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
      payload.id = loginUser.id;
      http
        .put(`/user`, payload, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          dispatch("setLoginUserInfo");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBoardCategoryAll({ commit }) {
      http
        .get("/board/category", {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          commit("SET_BOARD_CATEGORIES", data);
        })
        .catch((err) => console.log(err.response));
    },
    getBoardCategory({ commit }, payload) {
      http
        .get(`/board/category/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
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
      http
        .post("/board/category", payload, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ status }) => {
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
      http
        .get(url, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data, status }) => {
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
      http
        .get("/board/category/foruser", {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          commit("SET_BOARD_CATEGORY", data);
        });
    },
    async boardPostCreate({ state, commit }, payload) {
      payload.data.userId = state.loginUser.id;
      await http
        .post("/board/post", payload.data, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          commit("SET_POST_ID", Number(data.id));
        })
        .catch((err) => {
          console.log(err);
          throw new Error("게시물 작성 실패");
        });
    },
    async getBoardPost({ commit }, payload) {
      await http
        .get(`/board/post/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          commit("SET_POST", data);
        })
        .catch(() => {
          throw new Error("존재하지 않는 게시글입니다.");
        });
    },
    postViewCntPlus({ commit }, payload) {
      http
        .put(`/board/post/${payload}`, "", {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          commit("SET_POST_VIEWCNT_UP");
        });
    },
    getPostComments({ commit }, payload) {
      http
        .get(`/board/review/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          commit("SET_POST_COMMENTS", data);
        });
    },
    createPostComment({ dispatch }, payload) {
      http
        .post("/board/review", payload, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          dispatch("getPostComments", payload.boardId);
        });
    },
    updatePostComment({ dispatch }, payload) {
      http
        .put("/board/review", payload, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          dispatch("getPostComments", payload.boardId);
        });
    },
    deletePostComment({ dispatch }, payload) {
      http
        .delete(`/board/review/${payload.id}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          dispatch("getPostComments", payload.boardId);
        });
    },
    doPostLike({ commit }, payload) {
      http
        .post("/board/like", payload, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          commit("SET_POST_LIKE", true);
        });
    },
    deletePostLike({ commit }, payload) {
      http
        .delete(`/board/like/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          commit("SET_POST_LIKE", false);
        });
    },
    youtubeSearch({ commit }, payload) {
      let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${payload}&safeSearch=moderate&type=video&maxResults=15&key=${process.env.VUE_APP_YOUTUBE_API_KEY}`;
      http
        .get(url)
        .then(({ data: { items } }) => {
          let videos = [];
          items.forEach((v) => {
            let video = {};
            video.youtubeId = v.id.videoId;
            video.channelId = v.snippet.channelTitle;
            video.description = v.snippet.description;
            video.title = v.snippet.title;
            video.thumbnail = v.snippet.thumbnails.high.url;
            videos.push(video);
          });
          return videos;
        })
        .then((res) => {
          commit("SET_YOUTUBE_VIDEOS", res);
        });
    },
    getChallenges(context) {
      http
        .get("/challenge/search", {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          // console.log(data);
          context.commit("setChallenges", data);
        })
        .catch(() => {
          alert("에러발생!");
        });
    },
    getChallenge(context, payload) {
      http
        .get(`/challenge/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          context.commit("setChallenge", data);
        });
    },
    getChallengesSort(context, payload) {
      let url = "/challenge/search?";
      if (payload.orderBy) {
        url += `orderBy=${payload.orderBy}&orderByDir=${payload.orderByDir}`;
      }
      http
        .get(url, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          const sortedChallenges = [...data]; // data를 복사하여 sortedChallenges 배열 생성
          sortedChallenges.sort((a, b) => b.likeCnt - a.likeCnt); // likeCnt 내림차순으로 정렬
          context.commit("setChallengesSort", sortedChallenges); // challengesSort에 정렬된 배열 할당
        });
    },
    getReviews(context, challengeId) {
      http
        .get(`/challenge/review/${challengeId}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          context.commit("setReviews", data);
        })
        .catch((error) => {
          console.error(error);
          alert("에러발생!");
        });
    },
    async getIsPartcipate({ commit }, payload) {
      await http
        .get(`/challenge-participate/challenge/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ status }) => {
          if (status == 200) {
            commit("SET_IS_PARTICIPATE", true);
          } else {
            commit("SET_IS_PARTICIPATE", false);
          }
        })
        .catch((error) => {
          console.log(error);
          alert("에러발생!");
        });
    },
    participateChallenge({ commit }, payload) {
      http
        .post("/challenge-participate", payload, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          commit("SET_IS_PARTICIPATE", true);
        })
        .catch((err) => {
          console.log(err);
          alert("참여 신청에 실패하였습니다.");
        });
    },
    cancelChallenge({ commit }, payload) {
      http
        .delete(`/challenge-participate/${payload}`, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(() => {
          commit("SET_IS_PARTICIPATE", false);
        })
        .catch(() => {
          alert("참여 신청 취소에 실패하였습니다.");
        });
    },
    getParticipatedChallengeList({ commit }, payload) {
      http
        .get(`/challenge-participate/list/${payload}`)
        .then(({ data }) => {
          // console.log(data);
          commit("setChallenges", data);
        })
        .catch((err) => console.log(err));
    },
    getChallengeIngs({ commit }, payload) {
      http
        .get(`/challenge-participate/ing/${payload}`)
        .then(({ data }) => {
          commit("SET_CHALLENGE_INGS", data);
        })
        .catch((err) => console.log(err));
    },
    clearChallengeIng({ commit }) {
      commit("CLEAR_CHALLENGE_ING");
    },
  },
  plugins: [
    createVuexPersistedState({
      whiteList: ["isloggedin", "loginUser", "user"],
      key: "vuexStore",
      storage: window.sessionStorage, // sessionStorage에 저장
    }),
  ],
});
