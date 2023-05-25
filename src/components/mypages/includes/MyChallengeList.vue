<template>
  <div class="mypage-challenge-list-view">
    <h2>{{ title }}</h2>
    <div class="mypage-challenges">
      <my-challenge-component
        v-for="challenge in challenges"
        :key="challenge.id"
        :challenge="challenge"
        :type="type"
      ></my-challenge-component>
    </div>
  </div>
</template>

<script>
import MyChallengeComponent from "./MyChallengeComponent.vue";
export default {
  props: {
    challenges: Array,
    type: String,
    title: String,
  },
  components: {
    MyChallengeComponent,
  },
};
</script>

<style scoped>
.mypage-challenge-list-view {
  width: 100%;
  margin-bottom: 50px;
}

.mypage-challenges {
  display: flex;
  flex-wrap: wrap;
}
</style>
