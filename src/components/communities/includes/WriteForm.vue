<template>
  <div>
    <!-- 카테고리 선택 박스-->
    <div class="title-box">
      <div class="custom-dropdown small">
        <select v-model="post.boardCategoryId">
          <option v-for="c in boardCategories" :key="c.id" :value="c.id">
            {{ c.name }}
          </option>
        </select>
      </div>
      <!-- 제목 -->
      <input
        type="text"
        v-model.trim="post.title"
        placeholder="제목"
        required
        class="form-input"
      />
    </div>
    <!-- 내용 -->
    <ckeditor v-model="post.content" :config="editorConfig"></ckeditor>
    <div class="submit-btns">
      <span v-if="type == 'create'" @click="create">작성</span>
      <span v-if="type == 'modify'" @click="modify">수정</span>
    </div>
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
      if (
        !this.post.title ||
        !this.post.content ||
        !this.post.boardCategoryId
      ) {
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
  },
};
</script>

<style>
.form-input {
  width: 620px;
  height: 30px;
  border: none;
  box-shadow: 0 0 4px #d0baff;
  outline: none;
  padding: 2px 10px;
}
.title-box {
  margin-bottom: 20px;
  /* background-color: antiquewhite; */
  width: 100%;
}
.submit-btns {
  margin-top: 30px;
}
.submit-btns span {
  height: 35px;
  background-color: #d0baff;
  padding: 10px 50px;
  border-radius: 5px;
  box-shadow: 0 0 1px #d0baff;
  transition: all 0.1s ease-in-out;
}
.submit-btns span:hover {
  cursor: pointer;
  box-shadow: 0 0 3px #c3a8ff;
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
