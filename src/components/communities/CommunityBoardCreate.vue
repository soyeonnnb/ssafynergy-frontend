<!-- 커뮤니티 글작성 -->
<template>
  <div>
    <div class="box">
      <h2>커뮤니티 글 작성</h2>
      <write-form type="create"></write-form>
    </div>
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

<style scope>
h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
.box {
  width: 800px;
}
</style>
