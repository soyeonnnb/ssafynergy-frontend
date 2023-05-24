<template>
  <tr @click="goDetail">
    <th>{{ post.id }}</th>
    <th>{{ post.title }}</th>
    <th>{{ post.userNickname }}</th>
    <th>{{ post.createdAt.substring(0, 10) }}</th>
    <th>{{ post.viewCnt }}</th>
    <th>{{ post.likeCnt }}</th>
  </tr>
</template>

<script>
export default {
  name: "community-board-list-row",
  props: {
    post: Object,
  },
  methods: {
    goDetail() {
      this.$router.push({
        name: "community-board-detail",
        params: { id: this.post.id },
      });
    },
  },
};
</script>

<style></style>
