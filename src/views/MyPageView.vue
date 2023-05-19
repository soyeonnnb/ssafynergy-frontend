<!-- 마이페이지 뷰 -->
<template>
  <div>
    <home-nav></home-nav>
    <mypage-nav></mypage-nav>
  </div>
</template>

<script>
import homeNav from "@/components/common/homeNav.vue";
import mypageNav from "@/components/common/mypageNav.vue";
export default {
  name: "mypage-view",
  components: {
    homeNav,
    mypageNav,
  },
};
</script>

<style></style>
