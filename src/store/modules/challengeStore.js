import http from "@/util/httpCommon";

const challengeStore = {
  state: {
    challenges: [],
    challenge: {},
    challengesSort: [], // challengesSort 배열 추가
    reviews: [],
    searchChallenges: [],
  },
  getters: {
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
    searchChallenges(state) {
      return state.searchChallenges;
    },
  },
  mutations: {
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
    setSearchChallenges(state, payload) {
      state.searchChallenges = payload;
    },
  },
  actions: {
    getChallenges(context) {
      http
        .get("/challenge/search", {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
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
    getSearchChallenges(context, payload) {
      let url = "/challenge/search?";
      if (payload.difficulty !== null) {
        url += `difficulty=${payload.difficulty}&`;
      }
      if (payload.possibility !== null) {
        url += `possibility=${payload.possibility}&`;
      }
      // URL 마지막에 있는 & 문자 제거
      url = url.slice(0, -1);
      http
        .get(url, {
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
            "Content-type": "application/json",
          },
        })
        .then(({ data }) => {
          context.commit("setSearchChallenges", data); // challengesSort에 정렬된 배열 할당
        });
    },
  },
};

export default challengeStore;
