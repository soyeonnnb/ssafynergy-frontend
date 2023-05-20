<template>
  <div>
    <button @click="kakaoLogin">카카오로 로그인</button>
    <button>네이버로 로그인</button>
  </div>
</template>

<script>
export default {
  name: "social-login",
  methods: {
    kakaoLogin() {
      this.$store.dispatch("kakaoLogin");
    },
  },
};
</script>

<style></style>
