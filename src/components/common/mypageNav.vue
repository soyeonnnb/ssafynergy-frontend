<template>
  <div>
    <h2>{{ user.id }}</h2>
    <h2>{{ user.nickname }}</h2>
    <div v-if="user.id != loginUser.id">
      <button v-if="isFollow" @click="cancelFollow">구독 취소</button>
      <button v-if="!isFollow" @click="doFollow">구독</button>
    </div>
    <router-link
      :to="{
        name: 'mypage-challenge-situation',
        params: { channelId: user.id },
      }"
      >참여 현황(달력)</router-link
    >
    |
    <!-- <router-link :to="{ name: 'mypage-current-challenge' }"
      >참여 챌린지</router-link
    > -->
    | <span>찜한 챌린지</span> | <span>팔로우, 팔로워</span> |
    <router-link :to="{ name: 'mypage-board', params: { channelId: user.id } }"
      >작성글보기</router-link
    >
    |
    <router-link :to="{ name: 'mypage-info', params: { channelId: user.id } }"
      >내 정보 보기</router-link
    >
    |
    <router-link
      :to="{ name: 'mypage-info-update', params: { channelId: user.id } }"
      >내 정보 수정</router-link
    >
    |
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
  },
};
</script>

<style></style>
