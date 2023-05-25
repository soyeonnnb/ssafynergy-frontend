<template>
  <div class="my-challenge-review-form">
    <h1>리뷰 작성</h1>
    <input
      class="my-challenge-review-input"
      type="text"
      id="title"
      placeholder="제목"
      v-model="review.title"
      required
    />
    <input
      class="my-challenge-review-input"
      type="text"
      id="content"
      v-model="review.content"
      required
      placeholder="리뷰 내용"
    />
    <input
      type="number"
      id="rating"
      v-model="review.rating"
      required
      max="5"
      placeholder="별점"
      min="0"
      class="my-challenge-review-input"
    />

    <button @click="createReview" class="my-challenge-review-input">
      등록
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MypageReviewCreate",
  computed: {
    ...mapState(["review", "challenge", "loginUser"]),
  },
  created() {
    this.$store.dispatch("reviewClear");
  },
  methods: {
    createReview() {
      if (
        !this.review.title ||
        !this.review.content ||
        // !this.review.challengeId ||
        // !this.review.userId ||
        !this.review.rating
      ) {
        alert("폼 입력");
        return;
      }
      this.$store
        .dispatch("reviewCreate", {
          title: this.review.title,
          content: this.review.content,
          challengeId: this.challenge.id,
          userId: this.loginUser.id,
          rating: this.review.rating,
        })
        .then(() => {
          this.goReviewList();
        });
    },
    goReviewList() {
      this.$router.push({ name: "mypage-main" });
    },
  },
};
</script>

<style scoped>
.my-challenge-review-form {
  /* background-color: aqua; */
  border-radius: 5px;
  border: 1px solid rgb(201, 201, 201);
  box-shadow: 0 0 2px rgb(201, 201, 201);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 30px 0;
}
.my-challenge-review-form h1 {
  margin-bottom: 20px;
}
.my-challenge-review-input {
  width: 80%;
  padding: 10px 20px;
  outline: none;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 50px;

  box-sizing: border-box;
}
.my-challenge-review-input:not(:last-child) {
  margin-bottom: 20px;
}
.my-challenge-review-input:focus,
.my-challenge-review-input:hover {
  box-shadow: 0 0 4px rgb(182, 182, 182);
}
</style>
