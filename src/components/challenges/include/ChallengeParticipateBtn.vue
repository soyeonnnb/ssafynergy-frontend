<template>
  <div class="challenge-participate-btn">
    <span v-if="!isParticipate" @click="participateChallenge"> 신청하기 </span>
    <span v-else @click="cancelChallenge">신청 취소하기</span>
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

<style>
.challenge-participate-btn span {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(220, 202, 238);
  padding: 10px 20px;
  margin-left: 20px;
  border-radius: 5px;
}
.challenge-participate-btn span:hover {
  cursor: pointer;
  box-shadow: 0 0 4px rgb(220, 202, 238);
}
</style>
