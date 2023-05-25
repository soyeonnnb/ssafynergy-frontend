<template>
  <tr>
    <td>{{ category.id }}</td>
    <td>{{ category.name }}</td>
    <td v-if="category.isAuthorized">공개</td>
    <td v-else>비공개</td>
    <td v-if="category.writerType">관리자만</td>
    <td v-else>모두</td>
    <td v-if="category.reviewerType">관리자만</td>
    <td v-else>모두</td>
    <td>{{ category.postNum }}</td>
    <td></td>
  </tr>
</template>

<script>
export default {
  name: "board-category-list-row2",
  props: {
    category: Object,
  },
};
</script>

<style scoped>
td {
  /* background-color: aquamarine; */
  padding: 12px 0;
}
</style>
