<template>
  <div class="mypage-follow-obj">
    <img
      src="@/assets/img/profile_circle_img.jpg"
      alt=""
      class="mypage-follow-profile"
    />
    <span class="mypage-follow-id" @click="goUserDetail">{{ user.id }}</span>
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
        // console.log(this.user);
        this.$store.dispatch("getUserInfo", channelId);
        this.$store.dispatch("getIsFollow", channelId);
        this.$store.dispatch("getFollowingList", channelId);
        this.$store.dispatch("getFollowerList", channelId);
        this.$store.dispatch("getParticipatedChallengeList", channelId);
      } else {
        this.$router.push({
          name: "mypage-main",
        });
      }
    },
  },
};
</script>

<style>
.mypage-follow-obj {
  margin: 10px;
  width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mypage-follow-profile {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100px;
}
.mypage-follow-id {
  padding: 8px 0;
  color: white;
  box-shadow: 0 0 3px rgb(192, 192, 192);
  border-radius: 5px;
  background-color: black;
}
.mypage-follow-id:hover {
  cursor: pointer;
}
</style>
