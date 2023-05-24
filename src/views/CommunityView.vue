<!-- 커뮤니티 뷰 -->
<template>
  <div class="main">
    <home-nav></home-nav>
    <div class="community-main">
      <community-side-nav></community-side-nav>
      <router-view class="community-right-side"></router-view>
    </div>
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

<style scope>
.main {
  display: flex;
  justify-content: center;
}
.community-main {
  display: flex;
  /* background-color: antiquewhite; */
  margin-top: 100px;
  max-width: 1200px;
  min-width: 500px;
  padding: 0 20px;
}
.community-right-side {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: aquamarine; */
  padding-top: 50px;
  min-width: 1000px;
}
</style>
