<!-- admin challenge 생성 -->
<template>
  <div class="admin_page">
    <h1>챌린지 등록</h1>
    <write-form type="create"></write-form>
  </div>
</template>

<script>
import WriteForm from "./includes/challenge/WriteForm.vue";

export default {
  name: "AdminChallengeCreate",
  props: {
    type: String,
  },
  components: {
    WriteForm,
  },
};
</script>

<style>
.admin_page {
  padding-top: 120px;
  padding-left: 400px;
}
</style>
