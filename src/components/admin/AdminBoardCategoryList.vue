<!-- admin 카테고리 관리 -->
<template>
  <div class="category_page">
    <div>
      <h2>카테고리 관리</h2>
    </div>
    <table class="styled-table">
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
    <div class="create-btn-box">
      <router-link
        :to="{ name: 'admin-board-category-create' }"
        class="create-input-btn"
        >카테고리 생성</router-link
      >
    </div>
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

<style scoped>
.category_page {
  padding-top: 120px;
  padding-left: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.styled-table {
  border-collapse: collapse;
  white-space: nowrap;
  width: 80%;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  /* background-color: aqua; */
}
/* .styled-table thead {
  wdoi
} */
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  width: 100%;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}
.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
.create-btn-box {
  margin-top: 20px;
}
.create-input-btn {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 50px;
  color: black;
  text-decoration: none;
}
.create-input-btn:focus,
.create-input-btn:hover {
  box-shadow: 0 0 4px rgb(182, 182, 182);
}
</style>
