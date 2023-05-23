<template>
  <div>
    <button v-if="!isLikeChallenge" @click="likeChallenge">좋아요하기</button>
    <button v-else @click="cancelLikeChallenge">좋아요취소하기</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "challenge-like-btn",
  data() {
    return {
      challengeId: 10,
    };
  },
  computed: {
    ...mapState(["isLikeChallenge"]),
  },
  async created() {
    this.challengeId = Number(this.$route.params.id);
    await this.$store.dispatch("getIsLikeChallenge", this.challengeId);
  },
  methods: {
    likeChallenge() {
      this.$store.dispatch("likeChallenge", {
        challengeId: this.challengeId,
      });
    },
    cancelLikeChallenge() {
      this.$store.dispatch("cancelLikeChallenge", this.challengeId);
    },
  },
};
</script>

<style></style>
