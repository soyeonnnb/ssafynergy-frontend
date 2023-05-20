<template>
  <div>
    <router-link :to="{ name: 'regist' }">회원가입</router-link> |
    <router-link :to="{ name: 'login' }">로그인</router-link> |
    <router-link :to="{ name: 'home-view' }">메인화면</router-link> |
    <router-link :to="{ name: 'mypage-main' }">마이페이지</router-link> |
    <span>서비스 소개</span> |
    <router-link :to="{ name: 'video-view' }">영상</router-link> |
    <router-link :to="{ name: 'community-board' }">커뮤니티</router-link> |
    <router-link :to="{ name: 'admin-main' }">관리자 모드로 가기</router-link> |
  </div>
</template>

<script>
export default {};
</script>

<style></style>
