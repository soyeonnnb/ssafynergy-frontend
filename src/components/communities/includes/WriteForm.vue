<template>
  <div>
    <!-- 카테고리 선택 박스-->
    <select v-model="post.boardCategoryId">
      <option v-for="c in boardCategories" :key="c.id" :value="c.id">
        {{ c.name }}
      </option>
    </select>
    <!-- 제목 -->
    제목: <input type="text" v-model.trim="post.title" required />
    <!-- 내용 -->
    <!-- <textarea v-model="post.content"></textarea> -->
    <ckeditor v-model="post.content" :config="editorConfig"></ckeditor>

    <button v-if="type == 'create'" @click="create">작성</button>
    <button v-if="type == 'modify'" @click="modify">수정</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CKEditor from "ckeditor4-vue";

export default {
  name: "board-write-form",
  computed: {
    ...mapState(["post", "boardCategories"]),
  },
  data() {
    return {
      // editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
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
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component,
  },
  methods: {
    async create() {
      if (this.post.title == "" || this.post.content == "") {
        alert("내용을 작성하지 않았습니다.");
        return;
      }
      await this.$store
        .dispatch("boardPostCreate", {
          type: "user",
          data: {
            boardCategoryId: Number(this.post.boardCategoryId),
            title: this.post.title,
            content: this.post.content,
          },
        })
        .then(() => {
          this.$router.push({
            name: "community-board-detail",
            params: { id: this.post.id },
          });
        })
        .catch(() => {
          console.log("왜 에러..");
        });
    },
    modify() {},
  },
};
</script>

<style></style>
