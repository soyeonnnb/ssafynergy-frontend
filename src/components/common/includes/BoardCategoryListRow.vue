<template>
  <li @click="goCategoryDetail">
    {{ category.name }}
  </li>
</template>

<script>
export default {
  name: "board-category-list-row",
  props: {
    category: Object,
  },
  methods: {
    goCategoryDetail() {
      this.$store.commit("SET_BOARD_CATEGORY_ID", this.category.id);
      if (this.$route.name !== "community-board") {
        this.$router.push({ name: "community-board" });
      }
    },
  },
};
</script>

<style></style>
