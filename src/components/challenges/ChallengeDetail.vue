<!-- 챌린지 디테일 -->
<template>
  <div class="challenge-detail-view">
    <div class="challenge-detail-main">
      <section class="challenge-detail-img">
        <div class="challenge-detail-content"></div>
      </section>
      <section class="challenge-detail-info">
        <div class="challenge-detail-content challenge-detail-content-text">
          <div>
            <h1 class="challenge-detail-view-name">{{ challenge.name }}</h1>
            <span class="challenge-detail-view-desc">{{
              challenge.description
            }}</span>
          </div>
          <div class="challenge-detail-view-infos">
            <div>
              <i class="fa-regular fa-calendar"></i>
              <span> {{ challenge.startAt.substring(0, 10) }} 부터</span>
              <span> {{ challenge.finishAt.substring(0, 10) }} 까지 </span>
            </div>
            <div>
              <i class="fa-solid fa-people"></i>
              <span>{{ challenge.limitPersonNum }}명</span>
            </div>
            <div class="challenge-detail-btns">
              <challenge-like-btn></challenge-like-btn>
              <challenge-participate-btn></challenge-participate-btn>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 전체 리뷰 리스트 -->
    <div v-if="reviews.length" class="challenge-detail-reviews">
      <list-row-review
        v-for="(review, index) in reviews"
        :key="index"
        :no="index + 1"
        :review="review"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListRowReview from "@/components/challenges/include/ListRowReview.vue";
import ChallengeParticipateBtn from "./include/ChallengeParticipateBtn.vue";
import ChallengeLikeBtn from "./include/ChallengeLikeBtn.vue";

export default {
  name: "ChallengeDetail",
  components: {
    ListRowReview,
    ChallengeParticipateBtn,
    ChallengeLikeBtn,
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

<style scoped>
.challenge-detail-view {
  width: 75%;
  max-width: 1000%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
}
.challenge-detail-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  margin-bottom: 100px;
}
.challenge-detail-img {
  position: absolute;
  top: 0;
  left: -30%;
  width: 60%;
  height: 350px;
  padding: 50px 80px;
  /* background-color: red; */
  transform: skewX(30deg) translateX(-85px);
  overflow: hidden;
  z-index: -1;
}

.challenge-detail-img .challenge-detail-content {
  transform: skewX(-30deg);
  padding: 0 0 0 85px;
}

.challenge-detail-img:before {
  content: "";
  width: 200%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("@/assets/img/challenge_detail_img.jpg") no-repeat center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: skewX(-30deg) translateX(-85px);
  z-index: -1;
}

.challenge-detail-info {
  width: 100%;
  height: 350px;
  /* padding: 50px 80px 50px 62%; */
  display: flex;
  justify-content: end;
  margin-top: 100px;
}
.challenge-detail-content-text {
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.challenge-detail-view-name {
  font-size: 30px;
  margin-bottom: 25px;
}
.challenge-detail-view-desc {
  display: inline-block;
  max-width: 500px;
}
.challenge-detail-view-infos > div {
  margin-bottom: 15px;
}
.challenge-detail-view-infos i {
  margin-right: 10px;
}
.challenge-detail-btns {
  display: flex;
  justify-content: end;
  margin-top: 40px;
}
</style>
