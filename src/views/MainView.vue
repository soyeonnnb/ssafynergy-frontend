<!-- nav-bar만 있는 화면 -->
<template>
  <div>
    <home-nav></home-nav>
    <div class="body">
      <router-view></router-view>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import homeNav from "@/components/common/homeNav.vue";
import footerBar from "@/components/common/footerBar.vue";
export default {
  name: "main-component",
  components: {
    homeNav,
    footerBar,
  },
};
</script>

<style>
.body {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
