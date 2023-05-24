<template>
  <div class="challenge-detail-review">
    <div>
      <span @click="goUserHome" class="challenge-detail-review-author">{{
        review.userId
      }}</span>
      <span>{{ review.title }}</span>
    </div>
    <div>
      <div>
        {{ review.createdAt.substring(0, 10) }}
      </div>
      <div class="challenge-detail-review-rating">
        <i v-if="review.rating >= 1" class="fa-solid fa-star"></i>
        <i v-else class="fa-regular fa-star"></i>
        <i v-if="review.rating >= 2" class="fa-solid fa-star"></i>
        <i v-else class="fa-regular fa-star"></i>
        <i v-if="review.rating >= 3" class="fa-solid fa-star"></i>
        <i v-else class="fa-regular fa-star"></i>
        <i v-if="review.rating >= 4" class="fa-solid fa-star"></i>
        <i v-else class="fa-regular fa-star"></i>
        <i v-if="review.rating >= 5" class="fa-solid fa-star"></i>
        <i v-else class="fa-regular fa-star"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListRowReview",
  props: {
    review: Object,
    no: Number,
  },
  methods: {
    async goUserHome() {
      await this.$store.dispatch("getUserInfo", this.review.userId);
      this.$router.push({
        name: "mypage-main",
      });
    },
  },
};
</script>
<style scoped>
.challenge-detail-review {
  height: 60px;
  border-radius: 30px;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: 0 0 4px rgb(204, 204, 204);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 20px;
}
.challenge-detail-review > div {
  display: flex;
}
.challenge-detail-review-author {
  margin-right: 20px;
}
.challenge-detail-review-author:hover {
  cursor: pointer;
}
.challenge-detail-review-rating {
  margin-left: 10px;
}
.challenge-detail-review-rating i {
  color: rgb(255, 196, 33);
}
</style>
