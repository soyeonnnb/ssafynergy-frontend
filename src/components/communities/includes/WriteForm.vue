<template>
  <div>
    <!-- 카테고리 선택 박스-->
    <select v-model="post.boardCategoryId">
      <option v-for="c in boardCategories" :key="c.id" :value="c.id">
        {{ c.name }}
      </option>
    </select>
    <!-- 제목 -->
    제목: <input type="text" v-model="post.title" />
    <!-- 내용 -->
    <textarea v-model="post.content"></textarea>
    <button v-if="type == 'create'" @click="create">작성</button>
    <button v-if="type == 'modify'" @click="modify">수정</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "board-write-form",
  computed: {
    ...mapState(["post", "boardCategories"]),
  },
  props: {
    type: String,
  },
  created() {
    this.$store.dispatch("getBoardCategoryForUser");
    if (this.type === "create") {
      this.$store.dispatch("postClear");
    }
  },
  methods: {
    create() {
      console.log(this.post);
      this.$store.dispatch("boardPostCreate", {
        boardCategoryId: Number(this.post.boardCategoryId),
        title: this.post.title,
        content: this.post.content,
      });
    },
    modify() {},
  },
};
</script>

<style></style>
