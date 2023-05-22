<!-- 챌린지 디테일 -->
<template>
  <div class="regist">
    <h1 class="underline">챌린지 디테일</h1>
    <div class="regist_form">
      <label for="name">챌린지명</label>
      <div class="view">{{ challenge.name }}</div>
      <label for="startAt">시작일</label>
      <div class="view">{{ challenge.startAt }}</div>
      <label for="finishAt">종료일</label>
      <div class="view">{{ challenge.finishAt }}</div>
      <label for="description">상세설명</label>
      <div class="view">{{ challenge.description }}</div>
      <label for="limitPersonNum">모집인원</label>
      <div class="view">{{ challenge.limitPersonNum }}명</div>
      <div style="padding-top: 15px">
        <router-link to="/challenge/search" class="btn">목록</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChallengeDetail",
  computed: {
    ...mapGetters(["challenge"]),
  },
  created() {
    this.$store.dispatch("getChallenge", Number(this.$route.params.id));
    // console.log(this.$store.state.challenge);
  },
  methods: {},
};
</script>

<style></style>
