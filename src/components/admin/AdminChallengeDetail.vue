<!-- admin challenge detail -->
<template>
  <div>
    <h1 class="underline">챌린지 디테일</h1>
    <div class="regist_form">
      <label for="name">챌린지명</label>
      <div class="view">{{ challenge.name }}</div>
      <label for="startAt">시작일</label>
      <div class="view">{{ challenge.startAt }}</div>
      <label for="finishAt">종료일</label>
      <div class="view">{{ challenge.finishAt }}</div>
      <label for="limitPersonNum">모집인원</label>
      <div class="view">{{ challenge.limitPersonNum }}명</div>
      <label for="totalDay">챌린지 일수</label>
      <div class="view">{{ challenge.totalDay }}일</div>
      <label for="description">상세설명</label>
      <div class="view">{{ challenge.description }}</div>
      <!-- <label for="reviewCnt">리뷰개수</label>
      <div class="view">{{ challenge.reviewCnt }}개</div> -->
      <label for="publicType">공개여부</label>
      <div class="view">{{ challenge.publicType }}</div>
      <div style="padding-top: 15px">
        <router-link to="/admin/challenge" class="btn">목록</router-link> |
        <button @click="movePageModify">수정</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChallengeDetail",
  components: {},
  computed: {
    ...mapGetters(["challenge", "reviews"]),
  },
  created() {
    this.$store.dispatch("getChallenge", Number(this.$route.params.id));
  },
  methods: {
    movePageModify() {
      console.log("ID:", this.$route.params.id);
      this.$router.push({
        name: "admin-challenge-update",
        params: { id: this.$route.params.id },
      });
    },
  },
};
</script>

<style></style>
