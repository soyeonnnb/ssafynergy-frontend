<!-- 관리자 화면 -->
<template>
  <div class="special-page">
    <div>
      <admin-nav></admin-nav>
      <admin-side-nav></admin-side-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import adminNav from "@/components/common/adminNav.vue";
import adminSideNav from "@/components/common/adminSideNav.vue";
export default {
  name: "admin-view",
  components: {
    adminNav,
    adminSideNav,
  },
};
</script>

<style>
.special-page {
  margin: 0;
  padding: 0;
  /* background-color: rgb(217, 231, 252); */
  width: 100%;
  height: 100%;
}
</style>
