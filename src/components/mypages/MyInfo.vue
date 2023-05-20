<!-- 내 정보 보기 -->
<template>
  <div>
    {{ loginUser }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "my-info",
  computed: {
    ...mapState(["loginUser"]),
  },
  created() {
    this.$store.dispatch("setLoginUserInfo");
  },
};
</script>

<style></style>
