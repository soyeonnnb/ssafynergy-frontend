<template>
  <div>
    <div>카테고리 명:{{ post.boardCategoryName }}</div>
    <div>제목 : {{ post.title }}</div>
    <div>작성자: {{ post.userNickname }}</div>
    <div>작성일 : {{ post.createdAt }}</div>
    <div>조회수 : {{ post.viewCnt }}</div>
    <div>댓글수 : {{ post.reviewCnt }}</div>
    <div>좋아요수 : {{ post.likeCnt }}</div>
    <div>
      컨텐트 :
      <p v-html="post.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "community-post-detail-view",
  props: {
    post: Object,
  },
};
</script>

<style></style>
