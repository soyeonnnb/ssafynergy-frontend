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
    <div>
      <h2>리뷰</h2>
      <div v-if="review.length">
        <!-- 1유저 1챌린지 1리뷰 니까 그냥 바로 쓰자 -->
        {{ review }}
        {{ challengeIng }}
        {{ this.$route.params }}
      </div>
      <div v-else>
        <!-- 리뷰 없을때 작성할 수 있도록 하면될듯(참여했는지는 어떻게 구분하지???) -->
        없다
      </div>
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
    ...mapState(["challengeIng", "review", "loginUser", "challenge"]),
  },
  created() {
    this.$store.dispatch("clearChallengeIng");
    this.$store.dispatch("getChallengeIngs", Number(this.$route.params.id));
    this.$store.dispatch("getReview", {
      challengeId: this.challenge.id,
      userId: "loginUser",
    });
    console.log("챌린지id = " + Number(this.$route.params.id));
    console.log("로그인id = " + this.loginUser.id);
  },
};
</script>

<style></style>
