import http from "@/util/httpCommon";

const challengeStore = {
  state: {
    challenges: [],
    challenge: {},
  },
  getters: {
    challenges(state) {
      return state.challenges;
    },
    challenge(state) {
      return state.challenge;
    },
  },
  mutations: {
    setChallenges(state, payload) {
      state.challenges = payload;
    },
    setChallenge(state, payload) {
      state.challenge = payload;
      console.log(payload);
    },
  },
  actions: {
    getChallenges(context) {
      http
        .get("/challenge/search", {
          headers: { "Content-type": "application/json" },
        })
        .then(({ data }) => {
          console.log(data);
          context.commit("setChallenges", data);
        })
        .catch(() => {
          alert("에러발생!");
        });
    },
    getChallenge(context, payload) {
      http.get(`/challenge/${payload}`).then(({ data }) => {
        context.commit("setChallenge", data);
      });
    },
  },
};

export default challengeStore;
