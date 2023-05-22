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
    <div>
      <h4>검색</h4>
      <div>
        <select v-model="searchBy">
          <option
            v-for="(item, index) in searchByList"
            :value="item.value"
            :key="index"
          >
            {{ item.name }}
          </option>
        </select>
        <input type="text" v-model.trim="input" />
      </div>
      <div>
        정렬기준
        <select v-model="orderBy">
          <option
            v-for="(item, index) in orderByList"
            :value="item.value"
            :key="index"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <button @click="search">검색</button>
    </div>
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
  data() {
    return {
      orderBy: {},
      orderByList: [
        { name: "선택해주세요.", value: "none" },
        { name: "최신순", value: "desc" },
        { name: "오래된순", value: "created_at" },
        { name: "조회수순", value: "view_cnt" },
      ],
      searchBy: {},
      searchByList: [
        { name: "제목", value: "title" },
        { name: "작성자 아이디", value: "user_id" },
        { name: "내용", value: "content" },
      ],
      input: "",
    };
  },
  methods: {
    init() {
      this.$store.dispatch("postsClear");
      const categoryId = Number(this.$route.params.id);
      let obj = {
        hasBoardCategoryId: true,
        boardCategoryId: categoryId,
      };
      this.$store.dispatch("getPosts", obj);
    },
    search() {
      this.$store.dispatch("postsClear");
      const categoryId = Number(this.$route.params.id);
      let obj = {
        hasBoardCategoryId: true,
        boardCategoryId: categoryId,
      };
      if (this.orderBy == "desc") {
        obj.orderBy = "created_at";
        obj.orderByDir = "desc";
      }
      if (this.orderBy == "created_at") {
        obj.orderBy = "created_at";
        obj.orderByDir = "asc";
      }
      if (this.orderBy == "view_cnt") {
        obj.orderBy = "view_cnt";
        obj.orderByDir = "desc";
      }

      if (this.input && this.searchBy) {
        obj.key = this.searchBy;
        obj.content = this.input;
      }

      console.log(obj);
      this.$store.dispatch("getPosts", obj);
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
