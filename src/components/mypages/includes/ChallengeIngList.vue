<template>
  <div class="challenge-ing-box">
    <!-- <h2>챌린지 현황 박스</h2> -->
    <challenge-ing-list-row
      v-for="ing in challengeIngs"
      :key="ing.id"
      :ing="ing"
      @click="setChallengeIng"
    ></challenge-ing-list-row>
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

<style scoped>
.challenge-ing-box {
  /* background-color: aquamarine; */
  width: 98%;
  justify-content: center;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
</style>
