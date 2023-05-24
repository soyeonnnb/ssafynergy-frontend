<!-- admin challenge 수정 -->
<template>
  <div class="admin_page">
    <h1>챌린지 수정</h1>
    <write-form type="modify"></write-form>
  </div>
</template>

<script>
import WriteForm from "./includes/challenge/WriteForm.vue";

export default {
  name: "AdminChallengeUpdate",
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
