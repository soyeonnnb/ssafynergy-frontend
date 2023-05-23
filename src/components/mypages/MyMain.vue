<!-- 마이페이지 메인 -->
<template>
  <div>
    <h2>마이페이지 메인</h2>
    <follow-list></follow-list>
    <my-challenge-participate-list></my-challenge-participate-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FollowList from "./includes/FollowList.vue";
import MyChallengeParticipateList from "./includes/MyChallengeParticipateList.vue";
export default {
  components: {
    FollowList,
    MyChallengeParticipateList,
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const channelId = this.user.id;
    // console.log(this.user);
    this.$store.dispatch("getUserInfo", channelId);
    this.$store.dispatch("getIsFollow", channelId);
    this.$store.dispatch("getFollowingList", channelId);
    this.$store.dispatch("getFollowerList", channelId);
    this.$store.dispatch("getParticipatedChallengeList", channelId);
  },
};
</script>

<style></style>
