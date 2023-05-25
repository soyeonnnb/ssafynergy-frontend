<template>
  <div>
    <div class="category">{{ post.boardCategoryName }}</div>
    <div class="title">
      <h1>
        {{ post.title }}
      </h1>
    </div>
    <div class="info-box">
      <div>
        <span>{{ post.userNickname }}</span>
        <span>{{ post.createdAt }}</span>
      </div>
      <div>
        <span><i class="fa-regular fa-eye"></i> {{ post.viewCnt }}</span>
        <span><i class="fa-regular fa-comment"></i> {{ post.reviewCnt }}</span>
        <span><i class="fa-solid fa-heart"></i> {{ post.likeCnt }}</span>
      </div>
    </div>
    <hr class="content-divider" />
    <div class="content">
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

<style scoped>
.category {
  text-align: start;
  font-size: 20px;
}
.title {
  text-align: start;
  margin: 15px 0;
}
.title h1 {
  font-size: 30px;
}
.info-box {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.info-box span {
  margin-right: 10px;
}
.content-divider {
  width: 100%;
  height: 1px;
  background-color: rgb(225, 225, 225);
  border: 0;
  margin: 20px 0 40px 0;
}
.content {
  /* background-color: aqua; */
  padding: 20px 0;
  text-align: start;
}
</style>
