<template>
  <div class="like-btns">
    <span v-if="isLike" @click="cancelLike">
      <i class="fa-solid fa-heart fa-2xl"></i>
    </span>
    <span v-if="!isLike" @click="doLike">
      <i class="fa-regular fa-heart fa-2xl"></i>
    </span>
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
      this.$store.dispatch("deletePostLike", this.boardId);
    },
  },
};
</script>

<style scope>
.like-btns {
  text-align: end;
  margin-top: 25px;
}
.like-btns i {
  color: rgb(177, 56, 165);
}
.like-btns i:hover {
  cursor: pointer;
}
</style>
