<!-- 마이페이지 뷰 -->
<template>
  <div class="main">
    <home-nav></home-nav>
    <div class="mypage-main">
      <mypage-nav></mypage-nav>
      <router-view class="mypage-right-side"></router-view>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import homeNav from "@/components/common/homeNav.vue";
import mypageNav from "@/components/common/mypageNav.vue";
import footerBar from "@/components/common/footerBar.vue";
export default {
  name: "mypage-view",
  components: {
    homeNav,
    mypageNav,
    footerBar,
  },
};
</script>

<style scope>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.mypage-main {
  display: flex;
  /* background-color: antiquewhite; */
  margin-top: 100px;
  max-width: 1200px;
  min-width: 500px;
  width: 100%;
  padding: 0 20px;
}
.mypage-right-side {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: aquamarine; */
  padding-top: 50px;
  max-width: 1000px;
}
</style>
