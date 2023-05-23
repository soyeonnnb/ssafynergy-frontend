<template>
  <div>
    <h2>챌린지 현황 박스</h2>
    <div>
      <challenge-ing-list-row
        v-for="ing in challengeIngs"
        :key="ing.id"
        :ing="ing"
        @click="setChallengeIng"
      ></challenge-ing-list-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChallengeIngListRow from "./ChallengeIngListRow.vue";
export default {
  components: {
    ChallengeIngListRow,
  },
  computed: {
    ...mapState(["challengeIngs", "challengeIng"]),
  },
  methods: {
    setChallengeIng() {},
  },
};
</script>

<style></style>
