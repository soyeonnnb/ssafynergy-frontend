<!-- 마이페이지 메인 -->
<template>
  <div class="mypage-main-view">
    <my-challenge-list
      title="참여 챌린지 목록"
      :challenges="participateChallengeList"
      type="participate"
    ></my-challenge-list>
    <my-challenge-list
      title="찜한 챌린지 목록"
      :challenges="challengeLikeList"
      type="like"
    >
    </my-challenge-list>
    <follow-list></follow-list>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import FollowList from "./includes/FollowList.vue";
import MyChallengeList from "./includes/MyChallengeList.vue";
export default {
  components: {
    FollowList,
    MyChallengeList,
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapState(["participateChallengeList", "challengeLikeList"]),
  },
  created() {
    const userId = this.user.id;
    this.$store.dispatch("getUserInfo", userId);
    this.$store.dispatch("getIsFollow", userId);
    this.$store.dispatch("getFollowingList", userId);
    this.$store.dispatch("getFollowerList", userId);
    this.$store.dispatch("getParticipatedChallengeList", userId);
    this.$store.dispatch("getLikeChallengeList", userId);
  },
};
</script>

<style scoped>
.mypage-main-view {
  /* background-color: aqua; */
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.mypage-main-view h2 {
  font-size: 25px;
  margin-bottom: 20px;
}
</style>
