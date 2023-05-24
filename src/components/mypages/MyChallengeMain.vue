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
      <!-- v-if 작동안함... 지금 그냥 create만 작동중 -->
      <div v-if="review.id != 0">
        <!-- 1유저 1챌린지 1리뷰 니까 그냥 바로 쓰자 -->
        <write-form type="modify"></write-form>
      </div>
      <div v-else>
        <!-- 리뷰 없을때 작성할 수 있도록 하면될듯(참여했는지는 어떻게 구분하지???) -->
        리뷰를 작성해주세요
        <write-form type="create"></write-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChallengeIngList from "./includes/ChallengeIngList.vue";
import WriteForm from "./includes/WriteForm.vue";

export default {
  name: "mypage-challenge-main",
  props: {
    type: String,
  },
  components: {
    ChallengeIngList,
    WriteForm,
  },
  computed: {
    ...mapState(["challengeIng", "review", "loginUser", "challenge"]),
  },
  // mounted() {
  //   const challengeId = this.$route.params.challengeId;
  //   console.log("마운트" + challengeId);
  // },
  created() {
    this.$store.dispatch("clearChallengeIng");
    this.$store.dispatch("getChallengeIngs", Number(this.$route.params.id));
    const challengeId = this.$route.params.challengeId;
    const userId = this.loginUser.id;

    this.$store.dispatch("getReview", {
      challengeId,
      userId,
    });
  },
};
</script>

<style></style>
