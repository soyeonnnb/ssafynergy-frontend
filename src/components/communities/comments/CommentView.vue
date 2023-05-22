<template>
  <div>
    <h2>댓글 부분</h2>
    <div>
      <write-form type="create"></write-form>
      <h5>댓글 리스트</h5>
      <div>
        <comment-list-row
          v-for="(comment, index) in postComments"
          :key="index"
          :commentObj="comment"
        ></comment-list-row>
      </div>
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
