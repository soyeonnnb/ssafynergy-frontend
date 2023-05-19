<template>
  <div>
    <router-link :to="{ name: 'mypage-challenge-situation' }"
      >참여 현황(달력)</router-link
    >
    |
    <!-- <router-link :to="{ name: 'mypage-current-challenge' }"
      >참여 챌린지</router-link
    > -->
    | <span>찜한 챌린지</span> | <span>팔로우, 팔로워</span> |
    <router-link :to="{ name: 'mypage-board' }">작성글보기</router-link> |
    <router-link :to="{ name: 'mypage-info' }">내 정보 보기</router-link> |
    <router-link :to="{ name: 'mypage-info-update' }">내 정보 수정</router-link>
    |
  </div>
</template>

<script>
export default {};
</script>

<style></style>
