<template>
  <div class="mypage-nav">
    <img
      :src="`https://localhost:9999/upload/user/${user.img}`"
      v-if="user.img"
      class="mypage-nav-img"
    />
    <img src="@/assets/img/mypage_img.jpg" v-else class="mypage-nav-img" />
    <h2 class="mypage-nav-nickname" @click="goReMain">{{ user.nickname }}</h2>
    <div v-if="user.id != loginUser.id" class="mypage-nav-followbtn">
      <span v-if="isFollow" @click="cancelFollow">구독 취소</span>
      <span v-if="!isFollow" @click="doFollow">구독</span>
    </div>
    <ul>
      <li @click="goCalender">참여 현황(달력)</li>
      <li @click="goMyInfo">내 정보 보기</li>
      <li @click="goMyInfoUpdate">내 정보 수정</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user", "isFollow", "loginUser"]),
  },
  methods: {
    doFollow() {
      this.$store.dispatch("doFollow", { followUserId: this.user.id });
    },
    cancelFollow() {
      this.$store.dispatch("cancelFollow", this.user.id);
    },
    goReMain() {
      this.$router.push({ name: "mypage-main" });
    },
    goCalender() {
      this.$router.push({
        name: "mypage-challenge-situation",
        params: { channelId: this.user.id },
      });
    },
    goMyInfo() {
      this.$router.push({ name: "mypage-info" });
    },
    goMyInfoUpdate() {
      this.$router.push({ name: "mypage-info-update" });
    },
  },
};
</script>

<style scope>
.mypage-nav {
  margin-top: 60px;
  border-radius: 10px;
  padding: 40px 0;
  width: 220px;
  box-shadow: 0 0 4px rgb(149, 149, 149);
  margin-right: 20px;
  box-sizing: border-box;
}
.mypage-nav-img {
  width: 100%;
  margin-bottom: 20px;
}
.mypage-nav-nickname {
  font-size: 18px;
  margin-bottom: 20px;
}
.mypage-nav-nickname:hover {
  cursor: pointer;
}
.mypage-nav-followbtn {
  margin: 30px 0;
}
.mypage-nav-followbtn span {
  background-color: antiquewhite;
  padding: 7px 20px;
  border-radius: 20px;
  white-space: nowrap;
}
.mypage-nav-followbtn span:hover {
  cursor: pointer;
}
ul {
  width: 100%;
}

li {
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  width: 220px;
}
li:first-child {
  margin-bottom: 100px;
}
li > a {
  text-decoration: none;
  color: black;
}
li:hover {
  cursor: pointer;
  /* background-color: aquamarine; */
  background-color: #f3eeff;
}
</style>
