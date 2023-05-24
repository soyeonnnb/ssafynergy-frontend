<!-- 커뮤니티 게시글 리스트 -->
<template>
  <div>
    <div class="community-title">
      <h1>{{ boardCategory.name }} 목록</h1>
      <router-link :to="{ name: 'community-board-create' }"
        >게시글 작성</router-link
      >
    </div>
    <div>
      <div v-if="posts.length == 0" class="no-post">
        <span>게시글이 없습니다.</span>
        <span>옆의 카테고리를 선택해주세요</span>
      </div>
      <div class="table-part" v-else>
        <table class="styled-table">
          <thead>
            <tr>
              <th width="50px">번호</th>
              <th>제목</th>
              <th width="100px">작성자</th>
              <th width="100px">작성일</th>
              <th width="50px">조회수</th>
              <th width="50px">추천수</th>
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
        <div class="search-bar">
          <div class="custom-dropdown small">
            <select v-model="searchBy">
              <option
                v-for="(item, index) in searchByList"
                :value="item.value"
                :key="index"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <input type="text" v-model.trim="input" class="search-bar__input" />
          <div class="custom-dropdown small">
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
          <span @click="search" class="search-bar__btn">검색</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommunityBoardListRow from "./includes/CommunityBoardListRow.vue";
export default {
  computed: {
    ...mapState(["posts", "boardCategory", "boardCategoryId"]),
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
      const categoryId = Number(this.boardCategoryId);
      let obj = {
        hasBoardCategoryId: true,
        boardCategoryId: categoryId,
      };
      this.$store.dispatch("getPosts", obj);
    },
    search() {
      this.$store.dispatch("postsClear");
      const categoryId = Number(this.boardCategoryId);
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

      // console.log(obj);
      this.$store.dispatch("getPosts", obj);
    },
  },
  watch: {
    boardCategoryId() {
      this.init();
    },
  },
};
</script>

<style scope>
.community-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 800px;
}
.community-title a {
  text-decoration: none;
  /* width: 100px; */
  height: 40px;
  width: 130px;
  line-height: 40px;
  border-radius: 5px;
  /* background-color: aquamarine; */
  background-color: #9f7de8;
  color: white;
  font-weight: 500;
  box-shadow: 0 0 2px #9f7de8;
}
h1 {
  font-size: 25px;
  /* font-weight: 600; */
}
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  width: 800px;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #9f7de8;
  color: #ffffff;
  text-align: center;
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
  border-bottom: 2px solid #9f7de8;
}
.styled-table tbody tr:hover {
  cursor: pointer;
  background-color: #f3eeff;
}
.no-post {
  width: 800px;
  text-align: start;
}
.table-part {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-bar {
  /* width: 500px; */
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  /* background-color: aliceblue; */
  align-items: center;
}
.search-bar__input {
  width: 300px;
  height: 30px;
  border: none;
  box-shadow: 0 0 4px #d0baff;
  outline: none;
  padding: 2px 10px;
}
/* .search-bar__input:active {
} */
.search-bar__btn {
  width: 50px;
  height: 33px;
  border-radius: 3px;
  line-height: 33px;
  color: white;
  background-color: #9f7de8;
}
.search-bar__btn:hover {
  cursor: pointer;
  box-shadow: 0 0 4px #d0baff;
}
</style>
<style>
.big {
  font-size: 1.2em;
}

.small {
  font-size: 0.8em;
}

.square {
  width: 0.7em;
  height: 0.7em;
  margin: 0.5em;
  display: inline-block;
}

/* Custom dropdown */
.custom-dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 10px; /* demo only */
}

.custom-dropdown select {
  background-color: #d0baff;
  color: #fff;
  font-size: inherit;
  padding: 0.5em;
  padding-right: 2.5em;
  border: 0;
  margin: 0;
  border-radius: 3px;
  text-indent: 0.01px;
  text-overflow: "";
  -webkit-appearance: button; /* hide default arrow in chrome OSX */
}

.custom-dropdown::before,
.custom-dropdown::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.custom-dropdown::after {
  /*  Custom dropdown arrow */
  content: "\25BC";
  height: 1em;
  font-size: 0.625em;
  line-height: 1;
  right: 1.2em;
  top: 50%;
  margin-top: -0.5em;
}

.custom-dropdown::before {
  /*  Custom dropdown arrow cover */
  width: 2em;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0 3px 3px 0;
}

.custom-dropdown select[disabled] {
  color: rgba(0, 0, 0, 0.3);
}

.custom-dropdown select[disabled]::after {
  color: rgba(0, 0, 0, 0.1);
}

.custom-dropdown::before {
  background-color: rgba(0, 0, 0, 0.15);
}

.custom-dropdown::after {
  color: rgba(0, 0, 0, 0.4);
}
</style>
