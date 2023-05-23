<template>
  <div>
    <button v-if="!isParticipate" @click="participateChallenge">
      신청하기
    </button>
    <button v-else @click="cancelChallenge">신청 취소하기</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "challenge-participate-btn",
  data() {
    return {
      challengeId: 10,
      //   isParticipate: true,
    };
  },
  computed: {
    ...mapGetters(["isParticipate"]),
  },
  created() {
    this.challengeId = Number(this.$route.params.id);
  },
  methods: {
    participateChallenge() {
      this.$store.dispatch("participateChallenge", {
        challengeId: this.challengeId,
      });
    },
    cancelChallenge() {
      this.$store.dispatch("cancelChallenge", this.challengeId);
    },
  },
};
</script>

<style></style>
