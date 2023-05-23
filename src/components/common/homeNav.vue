<template>
  <div>
    <div v-if="isloggedin">
      <router-link :to="{ name: 'home-view' }">메인화면</router-link> |
      <div @click="goMyHome">마이페이지</div>
      | <span>서비스 소개</span> |
      <router-link :to="{ name: 'video-view' }">영상</router-link> |
      <div @click="goCommunity">커뮤니티</div>
      |
      <router-link :to="{ name: 'admin-main' }">관리자 모드로 가기</router-link>
      |
      <button @click="logout">로그아웃</button>
    </div>
    <!-- <div v-if="!isloggedin">
      <router-link :to="{ name: 'regist' }">회원가입</router-link> |
      <router-link :to="{ name: 'login' }">로그인</router-link> |
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isloggedin", "loginUser", "user"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "login" });
    },
    async goMyHome() {
      await this.$store.commit("SET_USER_DATA", this.loginUser);
      if (this.loginUser.id == this.user.id) {
        if (this.$route.name == "mypage-main") return;
      }
      this.$router.push({ name: "mypage-main" });
    },
    goCommunity() {
      this.$store.commit("SET_BOARD_CATEGORY_ID", 0);
      // console.log(this.$route.name);
      if (this.$router.name !== "community-board") {
        this.$router.push({ name: "community-board" });
      }
    },
  },
};
</script>

<style></style>
