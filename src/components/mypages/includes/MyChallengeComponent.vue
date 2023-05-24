<template>
  <div class="mypage-challenge-obj" @click="goChallengeDetail">
    <img
      src="@/assets/img/main_img.jpg"
      class="mypage-challenge-obj-img"
      :alt="`${challenge.id} 이미지`"
    />
    <div class="mypage-challenge-obj-info">
      <span>{{ challenge.name }}</span>
    </div>
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
        this.$store.dispatch("getChallenge", Number(this.challenge.id));
        this.$router.push({
          name: "mypage-challenge-main",
          params: {
            id: this.challenge.challengeParticipateId,
            challengeId: this.challenge.id,
          },
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

<style scope>
.mypage-challenge-obj {
  width: 280px;
  height: 150px;
  margin: 10px;
  border-radius: 10px;
  position: relative;
}
.mypage-challenge-obj:hover {
  cursor: pointer;
}
.mypage-challenge-obj-img {
  object-fit: fill;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transition: all 0.1s ease-in-out;
}
.mypage-challenge-obj-img:hover {
  opacity: 20%;
}
.mypage-challenge-obj-info {
  position: absolute;
  bottom: 10px;
  width: 100%;
}
</style>
