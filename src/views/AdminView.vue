<!-- 관리자 화면 -->
<template>
  <div>
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

<style></style>
