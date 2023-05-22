<template>
  <div @click="goUserDetail">
    {{ user.id }}
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
    goUserDetail() {
      if (this.$route.name === "mypage-main") {
        const channelId = this.user.id;
        this.$store.dispatch("getUserInfo", channelId);
        this.$store.dispatch("getIsFollow", channelId);
        this.$store.dispatch("getFollowingList", channelId);
        this.$store.dispatch("getFollowerList", channelId);
      } else {
        this.$router.push({
          name: "mypage-main",
          params: {
            channelId: this.user.id,
          },
        });
      }
    },
  },
};
</script>

<style></style>
