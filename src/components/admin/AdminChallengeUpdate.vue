<!-- admin challenge 수정 -->
<template>
  <div class="regist">
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

<style></style>
