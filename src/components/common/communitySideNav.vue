<template>
  <div>
    <div>
      <h3>여기에 각 게시판 카테고리~</h3>
      <div>
        <ul>
          <board-category-list-row
            v-for="category in boardCategories"
            :key="category.id"
            :category="category"
          ></board-category-list-row>
        </ul>
      </div>
    </div>
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

<style></style>
