<template>
  <div>
    <div>
      <label for="title">리뷰 제목</label>
      <input type="text" id="title" v-model="review.title" required />
      <label for="content">리뷰 내용</label>
      <input type="text" id="content" v-model="review.content" required />
      <label for="challengeId">챌린지 id</label>
      <input
        type="number"
        id="challengeId"
        v-model="review.challengeId"
        required
      />
      <label for="userId">유저 id</label>
      <input type="text" id="userId" v-model="review.userId" required />
      <label for="rating">별점</label>
      <input type="number" id="rating" v-model="review.rating" required />
    </div>

    <button v-if="type == 'create'" @click="createReview">등록</button>
    <button v-if="type == 'modify'" @click="modifyReview">수정</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MypageReviewCreate",
  props: {
    type: String,
  },
  computed: {
    ...mapState(["review"]),
  },
  created() {
    if (this.type == "create") {
      this.$store.dispatch("reviewClear");
      //   console.log(this.review);
    } else {
      const challengeId = this.$route.params.challengeId;
      const userId = this.$route.params.userId;
      this.$store.dispatch("getReview", { challengeId, userId }).catch(() => {
        alert("잘못된 접근입니다.");
        this.$router.push({ name: "mypage-main" });
      });
    }
  },
  methods: {
    createReview() {
      if (
        !this.review.title ||
        !this.review.content ||
        !this.review.challengeId ||
        !this.review.userId ||
        !this.review.rating
      ) {
        alert("폼 입력");
        return;
      }
      this.$store
        .dispatch("reviewCreate", {
          title: this.review.title,
          content: this.review.content,
          challengeId: this.review.challengeId,
          userId: this.review.userId,
          rating: this.review.rating,
        })
        .then(() => {
          this.goReviewList();
        });
    },
    modifyReview() {},
    goReviewList() {
      this.$router.push({ name: "mypage-main" });
    },
  },
};
</script>

<style></style>
