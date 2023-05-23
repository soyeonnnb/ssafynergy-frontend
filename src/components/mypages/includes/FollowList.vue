<template>
  <div>
    <h2>팔로잉</h2>
    <div>
      <follow-list-component
        v-for="user in followerUsers"
        :key="user.id"
        :user="user"
      ></follow-list-component>
    </div>
    <h2>팔로우</h2>
    <div>
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

<style></style>
