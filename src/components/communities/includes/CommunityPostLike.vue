<template>
  <div>
    <button v-if="isLike" @click="cancelLike">좋아요 취소</button>
    <button v-if="!isLike" @click="doLike">좋아요</button>
  </div>
</template>

<script>
export default {
  name: "community-post-like",
  props: {
    isLike: Boolean,
    boardId: Number,
  },
  methods: {
    doLike() {
      this.$store.dispatch("doPostLike", {
        boardId: this.boardId,
      });
    },
    cancelLike() {
      console.log(this.boardId);
      this.$store.dispatch("deletePostLike", this.boardId);
    },
  },
};
</script>

<style></style>
