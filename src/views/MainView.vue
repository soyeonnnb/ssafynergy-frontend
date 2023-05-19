<!-- nav-bar만 있는 화면 -->
<template>
  <div>
    <home-nav></home-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import homeNav from "@/components/common/homeNav.vue";
export default {
  name: "main-component",
  components: {
    homeNav,
  },
};
</script>

<style></style>
