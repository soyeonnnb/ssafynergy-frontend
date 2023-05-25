<!-- 챌린지 검색 -->
<template>
  <div>
    <h2>{{ title }}</h2>
    <!-- 전체 챌린지 리스트 -->
    <div class="card-set">
      <challenge-card
        v-for="(challenge, index) in challenges"
        :key="index"
        :index="index"
        :no="index + 1"
        :challenge="challenge"
      />
    </div>

    <!-- 챌린지 검색으로 넘어가는 버튼
    <button @click="movePage">챌린지 검색</button> -->
  </div>
</template>
<script>
import ChallengeCard from "./include/ChallengeCard.vue";
export default {
  name: "challengeList",
  components: {
    ChallengeCard,
  },
  props: {
    title: String,
    challenges: Array,
  },
  // methods: {
  //   movePage() {
  //     this.$router.push({ name: "challenge-search" });
  //   },
  // },
};
</script>

<style scoped>
h2 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 25px;
}
.card-set {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
