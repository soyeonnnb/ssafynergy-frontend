<!-- 커뮤니티 글작성 -->
<template>
  <div>
    <h2>커뮤니티 글 작성</h2>
    <write-form type="create"></write-form>
  </div>
</template>

<script>
import WriteForm from "./includes/WriteForm.vue";
export default {
  name: "community-board-write",
  components: {
    WriteForm,
  },
};
</script>

<style></style>
