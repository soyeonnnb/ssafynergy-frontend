<template>
  <div>
    <div class="tablehead">기본정보</div>
    <div style="background-color: white">
      <table>
        <tr v-if="type == 'modify'">
          <th>번호</th>
          <td>{{ boardCategory.id }}</td>
        </tr>
        <tr>
          <th>이름</th>
          <td><input type="text" v-model="boardCategory.name" /></td>
        </tr>
        <tr>
          <th>공개여부</th>
          <td>
            <input
              type="radio"
              v-model="boardCategory.isAuthorized"
              value="true"
            />
            공개 |
            <input
              type="radio"
              v-model="boardCategory.isAuthorized"
              value="false"
            />
            비공개
          </td>
        </tr>
        <tr>
          <th>작성자 타입</th>
          <td>
            <input
              type="radio"
              v-model="boardCategory.writerType"
              value="true"
            />
            관리자만 |
            <input
              type="radio"
              v-model="boardCategory.writerType"
              value="false"
            />
            전체 다
          </td>
        </tr>
        <tr>
          <th>댓글자 타입</th>
          <td>
            <input
              type="radio"
              v-model="boardCategory.reviewerType"
              value="true"
            />
            관리자만 |
            <input
              type="radio"
              v-model="boardCategory.reviewerType"
              value="false"
            />
            전체 다
          </td>
        </tr>
      </table>
      <button v-if="type == 'create'" @click="createCategory">생성</button>
      <button v-if="type == 'modify'" @click="modifyCategory">수정</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "board-category-write-form",
  props: {
    type: String,
  },
  computed: {
    ...mapState(["boardCategory"]),
  },
  created() {
    if (this.type == "modify") {
      const id = this.$route.query.id;
      this.$store.dispatch("getBoardCategory", id).catch(() => {
        alert("잘못된 접근입니다.");
        this.$router.push({ name: "admin-board-category" });
      });
    } else {
      this.$store.dispatch("boardCategoryClear");
    }
  },
  methods: {
    createCategory() {
      if (
        !this.boardCategory.name ||
        !this.boardCategory.isAuthorized ||
        !this.boardCategory.writerType ||
        !this.boardCategory.reviewerType
      ) {
        alert("폼을 입력해주세요.");
        return;
      }
      this.$store
        .dispatch("categoryCreate", {
          name: this.boardCategory.name,
          isAuthorized: this.boardCategory.isAuthorized,
          writerType: this.boardCategory.writerType,
          reviewerType: this.boardCategory.reviewerType,
          likeType: false,
          isChallenge: false,
          challengeid: null,
        })
        .then(() => {
          this.goList();
        });
    },
    modifyCategory() {},
    goList() {
      this.$router.push({ name: "admin-board-category" });
    },
  },
};
</script>

<style scoped>
.admin_page {
  padding-top: 120px;
  padding-left: 400px;
}
.tablehead {
  background-color: gray;
  width: 80%;
  height: 40px;
  vertical-align: middle;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding-left: 80px;
  color: white;
}
table {
  /* margin-top: 50px; */
  width: 80%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
  margin: 40px;
}
tr {
  height: 60px;
}
th,
td {
  border-bottom: 1px solid #444444;
  padding: 10px;
}
td {
  text-align: left;
  font-size: 15px;
  padding-left: 20px;
  vertical-align: middle;
}
</style>
