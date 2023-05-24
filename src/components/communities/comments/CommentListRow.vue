<template>
  <div class="comment-obj">
    <div class="comment-obj-row">
      <div>
        <span class="comment-nickname">{{ commentObj.userNickname }}</span>
        <span class="comment-createdAt">{{ commentObj.createdAt }}</span>
      </div>
      <div
        class="update-btns"
        v-if="commentObj.userId == loginUser.id"
        v-show="!formShow"
      >
        <span @click="showModify">수정</span>
        <span @click="deleteComment" style="color: rgb(174, 80, 80)">삭제</span>
      </div>
    </div>
    <div class="comment-content">{{ commentObj.content }}</div>
    <div v-show="formShow">
      <write-form
        type="modify"
        :commentObj="commentObj"
        @form-show-false="formShowFalse"
      ></write-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import WriteForm from "./WriteForm.vue";
export default {
  name: "commen-list-row",
  data() {
    return {
      formShow: false,
    };
  },
  computed: {
    ...mapState(["loginUser"]),
  },
  props: {
    commentObj: Object,
  },
  methods: {
    showModify() {
      this.formShow = !this.formShow;
    },
    deleteComment() {
      if (!confirm("댓글을 삭제하시겠습니까?")) {
        return;
      }
      this.$store.dispatch("deletePostComment", {
        id: this.commentObj.id,
        boardId: this.commentObj.boardId,
      });
    },
    formShowFalse() {
      this.formShow = false;
    },
  },
  components: {
    WriteForm,
  },
};
</script>

<style>
.comment-obj {
  padding: 25px 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.comment-obj-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.comment-content {
  text-align: start;
}
.comment-nickname {
  font-size: 19px;
}
.comment-createdAt {
  font-size: 12px;
  margin-left: 10px;
}
.update-btns span {
  margin-left: 10px;
}
.update-btns span:hover {
  cursor: pointer;
}
</style>
