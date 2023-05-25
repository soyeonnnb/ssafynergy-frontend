<template>
  <div class="mypage-follow-list-view">
    <h2>팔로잉</h2>
    <div class="mypage-follow-list">
      <follow-list-component
        v-for="user in followerUsers"
        :key="user.id"
        :user="user"
      ></follow-list-component>
    </div>
    <h2>팔로우</h2>
    <div class="mypage-follow-list">
      <follow-list-component
        v-for="user in followingUsers"
        :key="user.id"
        :user="user"
      ></follow-list-component>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FollowListComponent from "./FollowListComponent.vue";
export default {
  computed: {
    ...mapState(["followerUsers", "followingUsers"]),
  },
  components: {
    FollowListComponent,
  },
};
</script>

<style scoped>
.mypage-follow-list-view {
  width: 100%;
}
.mypage-follow-list {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}
</style>
