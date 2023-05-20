<!-- 커뮤니티 게시글 리스트 -->
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
          <th>추천수</th>
        </tr>
      </thead>
      <tbody>
        <community-board-list-row
          v-for="post in posts"
          :key="post.id"
          :post="post"
        ></community-board-list-row>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommunityBoardListRow from "./includes/CommunityBoardListRow.vue";
export default {
  computed: {
    ...mapState(["posts"]),
  },
  components: {
    CommunityBoardListRow,
  },
  created() {
    const categoryId = this.$route.params.id;
    this.$store.dispatch("getPosts", {
      boardCategoryId: categoryId,
    });
  },
};
</script>

<style></style>
