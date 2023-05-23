<template>
  <div>
    <div @click="goChallengeDetail">챌린지 하나하나 {{ challenge.id }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    challenge: Object,
    type: String,
  },
  computed: {
    ...mapState(["loginUser", "user"]),
  },
  methods: {
    goChallengeDetail() {
      if (this.type == "participate") {
        if (this.loginUser.id !== this.user.id) return;
        this.$router.push({
          name: "mypage-challenge-main",
          params: { id: this.challenge.challengeParticipateId },
        });
      } else if (this.type == "like") {
        this.$router.push({
          name: "challenge-detail-view",
          params: { id: this.challenge.id },
        });
      }
    },
  },
};
</script>

<style></style>
