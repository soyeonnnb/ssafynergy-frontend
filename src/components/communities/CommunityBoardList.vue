<!-- 커뮤니티 게시글 리스트 -->
<template>
  <div>
    <h1>{{ boardCategory.name }} 목록</h1>
    <router-link :to="{ name: 'community-board-create' }"
      >게시글 작성</router-link
    >
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
    ...mapState(["posts", "boardCategory"]),
  },
  components: {
    CommunityBoardListRow,
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store.dispatch("postsClear");
      const categoryId = Number(this.$route.params.id);
      this.$store.dispatch("getPosts", {
        hasBoardCategoryId: true,
        boardCategoryId: categoryId,
      });
    },
  },
  watch: {
    $route() {
      this.init();
    },
  },
};
</script>

<style></style>
