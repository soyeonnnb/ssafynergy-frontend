<template>
  <div>
    <h2>로그인 한 경우에만</h2>
    <Challenge-List></Challenge-List>
  </div>
</template>

<script>
import ChallengeList from "./challenges/ChallengeList.vue";

export default {
  components: {
    ChallengeList,
  },
};
</script>

<style></style>
