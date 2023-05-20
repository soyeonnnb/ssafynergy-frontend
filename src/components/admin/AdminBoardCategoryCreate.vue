<!-- admin 카테고리 생성 -->
<template>
  <div>
    <h2>카테고리 생성</h2>
    <write-form type="create"></write-form>
  </div>
</template>

<script>
import WriteForm from "./includes/boardCategory/WriteForm.vue";
export default {
  name: "board-category-create",
  components: {
    WriteForm,
  },
};
</script>

<style></style>
