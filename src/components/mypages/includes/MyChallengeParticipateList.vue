<template>
  <div>
    <h2>참여 챌린지 목록</h2>
    <div>
      <my-challenge-participate-component
        v-for="challenge in challenges"
        :key="challenge.id"
        :challenge="challenge"
      ></my-challenge-participate-component>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MyChallengeParticipateComponent from "./MyChallengeParticipateComponent.vue";
export default {
  computed: {
    ...mapGetters(["challenges"]),
    // ...mapState(["user"]),
  },
  components: {
    MyChallengeParticipateComponent,
  },
  //   created() {
  //     console.log(this.user.id);
  //   },
};
</script>

<style></style>
