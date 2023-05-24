<template>
  <div class="side-nav">
    <ul>
      <board-category-list-row
        v-for="category in boardCategories"
        :key="category.id"
        :category="category"
      ></board-category-list-row>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BoardCategoryListRow from "./includes/BoardCategoryListRow.vue";
export default {
  name: "community-side-nav",
  computed: {
    ...mapState(["boardCategories"]),
  },
  components: {
    BoardCategoryListRow,
  },
  created() {
    this.$store.dispatch("getBoardCategoryAll");
  },
};
</script>

<style>
.side-nav {
  margin-top: 60px;
  border-radius: 10px;
  padding: 40px 0;
  width: 220px;
  box-shadow: 0 0 4px rgb(149, 149, 149);
  margin-right: 20px;
  box-sizing: border-box;
}
ul {
  width: 100%;
}
ul > li:not(:last-child) {
  border-bottom: 1px solid #f3eeff;
}
</style>
