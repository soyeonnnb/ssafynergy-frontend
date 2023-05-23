<!-- 참여 챌린지(디테일) 메인 -->
<template>
  <div>
    <h2>a 챌린지</h2>
    <router-link
      :to="{
        name: 'mypage-challenge-post',
        params: { id: this.$route.params.id },
      }"
      >현황 등록</router-link
    >
    <challenge-ing-list></challenge-ing-list>
    <div>
      <div v-if="challengeIng">있땅</div>
      <div v-else>비었당</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChallengeIngList from "./includes/ChallengeIngList.vue";
export default {
  name: "mypage-challenge-main",
  components: {
    ChallengeIngList,
  },
  computed: {
    ...mapState(["challengeIng"]),
  },
  created() {
    this.$store.dispatch("clearChallengeIng");
    this.$store.dispatch("getChallengeIngs", Number(this.$route.params.id));
  },
};
</script>

<style></style>
