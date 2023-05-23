<template>
  <div>
    <h2>{{ title }}</h2>
    <div>
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
  //   created() {
  //     console.log(this.user.id);
  //   },
};
</script>

<style></style>
