<template>
  <div class="comment-write-box">
    <input type="text" v-model.trim="content" class="comment-input" />
    <div v-if="type == 'modify'" class="modify-btns">
      <span @click="commentModify">수정</span>
      <span @click="commentModifyCancel">취소</span>
    </div>
    <span @click="commentWrite" v-if="type == 'create'">등록</span>
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

<style>
.comment-write-box {
  display: flex;
  align-items: center;
  height: 50px;
  margin: 5px 0 20px 0;
}
.comment-input {
  flex-grow: 1;
  height: 20px;
  padding: 10px 15px;
  outline: none;
  border: 1px solid rgba(220, 219, 219, 0.703);
}
.comment-write-box span {
  padding: 13px 15px;
  margin-left: 5px;
  border-radius: 3px;
  border: 1px solid rgba(220, 219, 219, 0.703);
  background-color: rgb(255, 251, 247);
  transition: all 0.1s ease-in;
}
.comment-write-box span:hover {
  cursor: pointer;
  background-color: rgb(233, 229, 224);
}
.modify-btns {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
