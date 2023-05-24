<template>
  <div class="home-nav-bar">
    <div class="home-nav">
      <div>
        <router-link
          :to="{ name: 'home-view' }"
          id="ssafynergy_logo"
          class="mouse_pointer"
        >
          <img src="@/assets/img/ssafynergy_logo.png" />
        </router-link>
        <router-link :to="{ name: 'video-view' }" class="mouse_pointer"
          >영상</router-link
        >
        <div @click="goCommunity" class="mouse_pointer">커뮤니티</div>
      </div>
      <div>
        <router-link
          :to="{ name: 'admin-main' }"
          v-if="isAdmin"
          class="mouse_pointer"
          >관리자 모드로 가기</router-link
        >
        <div @click="goMyHome" class="mouse_pointer">마이페이지</div>
        <span @click="logout" class="mouse_pointer">로그아웃</span>
      </div>
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
.mouse_pointer:hover {
  cursor: pointer;
  color: rgb(20, 125, 81);
}
#ssafynergy_logo {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
#ssafynergy_logo > img {
  height: 50px;
}
.home-nav-bar {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  min-width: 800px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
}
.home-nav {
  display: flex;
  justify-content: space-between;
  width: 80%;
  text-decoration: none;
  color: black;
  margin: 0 200px;
}
.home-nav a {
  text-decoration: none;
  color: black;
}
.home-nav > div {
  display: flex;
  width: 500px;
  white-space: nowrap;
  align-items: center;
  height: 70px;
  line-height: 70px;
}
.home-nav :nth-child(1) > * {
  margin-right: 15px;
}
.home-nav :last-child {
  justify-content: end;
}
.home-nav :last-child > * {
  margin-left: 15px;
}
</style>
