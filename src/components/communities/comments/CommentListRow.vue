<template>
  <div>
    <div>
      <div>번호: {{ commentObj.id }}</div>
      <div>작성자이름: {{ commentObj.userNickname }}</div>
      <div>도서평: {{ commentObj.content }}</div>
      <div>작성시각: {{ commentObj.createdAt }}</div>
      <div v-if="commentObj.userId == loginUser.id">
        <div v-show="!formShow">
          <button @click="showModify">수정폼</button>
          <button @click="deleteComment">삭제</button>
        </div>
      </div>
    </div>
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

<style></style>
