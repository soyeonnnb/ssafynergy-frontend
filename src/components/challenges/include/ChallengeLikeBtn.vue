<template>
  <div class="challenge-like-btn">
    <span v-if="!isLikeChallenge" @click="likeChallenge"
      ><i class="fa-regular fa-heart fa-xl"></i
    ></span>
    <span v-else @click="cancelLikeChallenge"
      ><i class="fa-solid fa-heart fa-xl"></i
    ></span>
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

<style scoped>
.challenge-like-btn i {
  color: #ac2072;
}
.challenge-like-btn i:hover {
  cursor: pointer;
}
</style>
