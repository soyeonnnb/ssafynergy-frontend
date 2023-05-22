<template>
  <div>
    <input type="text" v-model.trim="content" />

    <div v-if="type == 'modify'">
      <button @click="commentModify">수정</button>
      <button @click="commentModifyCancel">취소</button>
    </div>

    <button @click="commentWrite" v-if="type == 'create'">등록</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommentWrite",
  data() {
    return {
      content: "",
    };
  },
  computed: {
    ...mapState(["post", "loginUser"]),
  },
  props: {
    type: String,
    commentObj: Object,
  },
  created() {
    if (this.type == "modify") {
      this.content = this.commentObj.content;
    }
  },
  methods: {
    commentModify() {
      // 이 댓글의 작성자와 로그인 유저가 같은지 확인
      if (this.commentObj.userId !== this.loginUser.id) {
        alert("접근 권한이 없습니다.");
        return;
      }
      this.$store
        .dispatch("updatePostComment", {
          id: Number(this.commentObj.id),
          boardId: this.post.id,
          userId: this.loginUser.id,
          content: this.content,
        })
        .then(() => {
          this.$emit("form-show-false");
        });
    },
    commentModifyCancel() {
      this.$emit("form-show-false");
    },
    commentWrite() {
      if (this.content == "") {
        return;
      }
      this.$store
        .dispatch("createPostComment", {
          id: 0,
          content: this.content,
          boardId: this.post.id,
          userId: this.loginUser.id,
        })
        .then(() => {
          this.content = "";
        });
    },
  },
};
</script>

<style></style>
