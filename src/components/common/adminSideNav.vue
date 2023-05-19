<template>
  <div>
    <h3>챌린지 관리</h3>
    <div>
      <router-link :to="{ name: 'admin-challenge-list' }"
        >챌린지 리스트</router-link
      >
      <router-link :to="{ name: 'admin-challenge-create' }"
        >챌린지 생성</router-link
      >
      <router-link :to="{ name: 'admin-challenge-update' }"
        >챌린지 수정</router-link
      >
      <router-link :to="{ name: 'admin-challenge-difficulty' }"
        >난이도 관리</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
