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

<style scope>
li {
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  width: 220px;
}
li:hover {
  cursor: pointer;
  /* background-color: aquamarine; */
  background-color: #f3eeff;
}
</style>
