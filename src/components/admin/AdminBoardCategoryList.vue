<!-- admin 카테고리 관리 -->
<template>
  <div>
    <h2>카테고리 관리</h2>
    <router-link :to="{ name: 'admin-board-category-create' }"
      >카테고리 생성</router-link
    >
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>공개여부</th>
          <th>작성자 타입</th>
          <th>댓글자 타입</th>
          <th>게시글 갯수</th>
        </tr>
      </thead>
      <tbody>
        <board-category-list-row
          v-for="category in boardCategories"
          :key="category.id"
          :category="category"
        ></board-category-list-row>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BoardCategoryListRow from "./includes/boardCategory/BoardCategoryListRow.vue";

export default {
  name: "board-category-list",
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
