<template>
  <div class="home-nav">
    <div>
      <router-link :to="{ name: 'home-view' }">메인화면</router-link>
      <span>서비스 소개</span>
      <router-link :to="{ name: 'video-view' }">영상</router-link>
      <div @click="goCommunity">커뮤니티</div>
    </div>
    <div>
      <router-link :to="{ name: 'admin-main' }" v-if="isAdmin"
        >관리자 모드로 가기</router-link
      >
      <div @click="goMyHome">마이페이지</div>
      <span @click="logout">로그아웃</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isloggedin", "loginUser", "user", "isAdmin"]),
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

<style>
.home-nav {
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  height: 70px;
}
.home-nav > div {
  display: flex;
  width: 500px;
  background-color: aqua;
  white-space: nowrap;
  align-content: center;
  height: 70px;
  line-height: 70px;
}
.home-nav :nth-child(2) {
  justify-content: end;
}
</style>
