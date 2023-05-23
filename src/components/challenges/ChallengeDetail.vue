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
      <label for="reviewCnt">리뷰개수</label>
      <div class="view">{{ challenge.reviewCnt }}개</div>
      <challenge-participate-btn></challenge-participate-btn>
      <div style="padding-top: 15px">
        <router-link to="/challenge/search" class="btn">목록</router-link>
      </div>
    </div>
    <h2>리뷰 리스트</h2>
    <!-- 전체 챌린지 리스트 -->
    <div v-if="reviews.length">
      <table>
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 25%" />
          <col style="width: 10%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성일</th>
            <th>작성자</th>
            <th>별점</th>
          </tr>
        </thead>
        <tbody>
          <list-row-review
            v-for="(review, index) in reviews"
            :key="index"
            :no="index + 1"
            :review="review"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListRowReview from "@/components/challenges/include/ListRowReview.vue";
import ChallengeParticipateBtn from "./include/ChallengeParticipateBtn.vue";

export default {
  name: "ChallengeDetail",
  components: {
    ListRowReview,
    ChallengeParticipateBtn,
  },
  computed: {
    ...mapGetters(["challenge", "reviews"]),
  },
  created() {
    const id = Number(this.$route.params.id);
    this.$store.dispatch("getChallenge", id);
    this.$store.dispatch("getReviews", id);
    this.$store.dispatch("getIsPartcipate", id);
    // console.log(this.isParticipate);
    // console.log(this.$route.params.id);getIsPartcipate
    // console.log("테스트");
  },
};
</script>

<style></style>
