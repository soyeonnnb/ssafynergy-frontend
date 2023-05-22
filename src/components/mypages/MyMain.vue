<!-- 마이페이지 메인 -->
<template>
  <div>
    <h2>마이페이지 메인</h2>
    <follow-list></follow-list>
  </div>
</template>

<script>
import FollowList from "./includes/FollowList.vue";
export default {
  components: {
    FollowList,
  },
  created() {
    const channelId = this.$route.params.channelId;
    this.$store.dispatch("getUserInfo", channelId);
    this.$store.dispatch("getIsFollow", channelId);
    this.$store.dispatch("getFollowingList", channelId);
    this.$store.dispatch("getFollowerList", channelId);
  },
};
</script>

<style></style>
