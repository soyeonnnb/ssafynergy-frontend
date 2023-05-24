<template>
  <div class="comment-part">
    <write-form type="create"></write-form>
    <div class="comments-row">
      <comment-list-row
        v-for="(comment, index) in postComments"
        :key="index"
        :commentObj="comment"
      ></comment-list-row>
    </div>
  </div>
</template>

<script>
import CommentListRow from "./CommentListRow.vue";
import WriteForm from "./WriteForm.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["postComments"]),
  },
  components: {
    CommentListRow,
    WriteForm,
  },
};
</script>

<style scoped>
.comment-part {
  background-color: rgb(238, 234, 229);
  box-sizing: border-box;
  padding: 30px 20px;
}
.comments-row > div:not(:last-child) {
  border-bottom: 1px solid rgb(193, 179, 167);
}
</style>
