<template>
  <div>
    <!-- 편의상 추가 -->
    <home-nav></home-nav>
    <h2>로그인</h2>
    <div>
      아이디
      <input type="text" v-model.trim="id" id="id" required />
    </div>
    <div>
      비밀번호
      <input type="password" v-model.trim="password" id="password" required />
    </div>
    <div>
      <button @click="login">로그인</button>
    </div>
    <social-login></social-login>
  </div>
</template>

<script>
import homeNav from "@/components/common/homeNav.vue";
import socialLogin from "@/components/partials/socialLogin.vue";
export default {
  components: {
    homeNav,
    socialLogin,
  },
  data() {
    return {
      id: "",
      password: "",
    };
  },
  created() {
    this.$store.commit("CLEAR_USER");
  },
  methods: {
    login() {
      this.$store
        .dispatch("userLogin", {
          id: this.id,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(() => {
          alert("아이디 혹은 비밀번호가 틀렸습니다.");
        });
    },
  },
};
</script>

<style></style>
