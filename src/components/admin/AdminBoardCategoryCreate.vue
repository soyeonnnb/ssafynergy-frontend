<!-- admin 카테고리 생성 -->
<template>
  <div class="category_page">
    <h2>카테고리 생성</h2>
    <write-form type="create" class="write-form"></write-form>
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

<style scoped>
.category_page {
  padding-top: 120px;
  padding-left: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.write-form {
  width: 100%;
}
</style>
