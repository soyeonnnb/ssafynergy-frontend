<!-- 참여 챌린지(디테일) 메인 -->
<template>
  <div class="my-challenge-main-view">
    <h2>{{ challenge.name }} 챌린지</h2>
    <div class="my-challenge-state-write">
      <span @click="goStateWrite">현황 등록</span>
    </div>
    <div class="my-challenge-ings">
      <span class="my-challenge-ings-no" v-if="!challengeIngs.length">
        현황이 없습니다. 등록해주세요
      </span>
      <challenge-ing-list v-else></challenge-ing-list>
    </div>
    <div>
      <div v-if="review.id" class="my-challenge-review-obj">
        <div class="my-challenge-review">
          <div>
            <span>{{ review.title }}</span>
          </div>
          <div>
            <div>
              {{ review.createdAt.substring(0, 10) }}
            </div>
            <div class="my-challenge-review-rating">
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
      </div>
      <div v-else>
        <write-form></write-form>
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
    ...mapState(["challengeIngs", "review", "loginUser", "challenge"]),
  },
  // mounted() {
  //   const challengeId = this.$route.params.challengeId;
  //   console.log("마운트" + challengeId);
  // },

  created() {
    this.$store.dispatch("clearChallengeIng");
    this.$store.dispatch("getChallengeIngs", Number(this.$route.params.id));
    const challengeId = this.$route.params.id;
    const userId = this.loginUser.id;
    console.log("in chall main", challengeId, userId);
    this.$store.dispatch("getReview", {
      challengeId,
      userId,
    });
  },
  methods: {
    goStateWrite() {
      this.$router.push({
        name: "mypage-challenge-post",
        params: { id: this.$route.params.id },
      });
    },
  },
};
</script>

<style scoped>
.my-challenge-main-view {
  display: flex;
  flex-direction: column;
  /* background-color: antiquewhite; */
  width: 100%;
  margin-top: 20px;
  justify-content: start;
}
.my-challenge-main-view h2 {
  font-size: 25px;
}
.my-challenge-state-write {
  display: flex;
  width: 100%;
  justify-content: end;
}
.my-challenge-state-write span {
  /* background-color: aqua; */
  padding: 15px 30px;
  border-radius: 5px;
  border: 1px solid rgb(201, 201, 201);
}
.my-challenge-state-write span:hover {
  box-shadow: 0 0 4px rgb(201, 201, 201);
  cursor: pointer;
}
.my-challenge-ings {
  margin: 20px 0;
}
.my-challenge-ings-no {
  font-size: 20px;
}
.my-challenge-review-obj {
  /* background-color: aqua; */
  width: 500px;
}
.my-challenge-review {
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
.my-challenge-review > div {
  display: flex;
}
.my-challenge-review-author {
  margin-right: 20px;
}
.my-challenge-review-author:hover {
  cursor: pointer;
}
.my-challenge-review-rating {
  margin-left: 10px;
}
.my-challenge-review-rating i {
  color: rgb(255, 196, 33);
}
</style>
