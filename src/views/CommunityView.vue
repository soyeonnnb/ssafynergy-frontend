<!-- 커뮤니티 뷰 -->
<template>
  <div>
    <home-nav></home-nav>
    <community-side-nav></community-side-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import homeNav from "@/components/common/homeNav.vue";
import communitySideNav from "@/components/common/communitySideNav.vue";
export default {
  name: "community-view",
  components: {
    homeNav,
    communitySideNav,
  },
};
</script>

<style></style>
