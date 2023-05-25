<template>
  <tr @click="goDetail">
    <td>{{ post.id }}</td>
    <td>{{ post.title }}</td>
    <td>{{ post.userNickname }}</td>
    <td>{{ post.createdAt.substring(0, 10) }}</td>
    <td>{{ post.viewCnt }}</td>
    <td>{{ post.likeCnt }}</td>
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

<style scoped>
td {
  /* background-color: aquamarine; */
  padding: 12px 0;
}
</style>
