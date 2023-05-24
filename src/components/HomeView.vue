<template>
  <div class="main">
    <img src="@/assets/img/main_img.jpg" id="main_img" />
    <div class="challeng-list">
      <Challenge-List
        title="챌린지 리스트"
        :challenges="challenges"
      ></Challenge-List>
      <!-- 챌린지 검색으로 넘어가는 버튼 -->
      <router-link :to="{ name: 'challenge-search' }" class="search-btn"
        >챌린지 더보기</router-link
      >
      <Challenge-List
        title="인기 챌린지"
        :challenges="challengesSort"
      ></Challenge-List>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChallengeList from "./challenges/ChallengeList.vue";

export default {
  components: {
    ChallengeList,
  },
  computed: {
    ...mapGetters(["challenges", "challengesSort"]),
  },
  created() {
    this.$store.dispatch("getChallenges");
    this.$store.dispatch("getChallengesSort", {
      orderBy: "likeCnt",
      orderByDir: "desc",
    });
  },
};
</script>

<style scope>
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#main_img {
  width: 100%;
  margin-bottom: 100px;
}
.challeng-list {
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 1000px;
  /* background-color: antiquewhite; */
  flex-direction: column;
  align-content: center;
}
.search-btn {
  text-decoration: none;
  font-weight: 700;
  color: white;
  background-color: rgb(32, 131, 131);
  width: 250px;
  height: 50px;
  line-height: 50px;
  border-radius: 6px;
  box-shadow: 0 0 3px rgb(32, 131, 131);
  margin: 0 auto;
  margin-bottom: 150px;
  transition: all 0.2s ease-out;
}
.search-btn:hover {
  box-shadow: 0 0 6px rgb(32, 131, 131);
}
</style>
