<template>
  <tr>
    <td>{{ category.id }}</td>
    <td>{{ category.name }}</td>
    <td>{{ category.isAuthorized }}</td>
    <td>{{ category.writerType }}</td>
    <td>{{ category.reviewerType }}</td>
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

<style></style>
