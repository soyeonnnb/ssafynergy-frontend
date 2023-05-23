<template>
  <div>
    <h2>챌린지 현황 등록</h2>
    <div>
      <div>일차: <input type="number" v-model.trim="index" required /></div>
      <div>
        프로필 사진
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          @change="setChallengeImg"
          required
          id="challenge-img-edit"
        />
      </div>
      <div>
        코멘트
        <input type="text" v-model.trim="content" required />
      </div>
      <button @click="postChallengeIng">등록</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { mapState } from "vuex";
export default {
  data() {
    return {
      index: 1,
      img: "",
      content: "",
    };
  },
  methods: {
    setChallengeImg() {
      const frm = new FormData();
      const photoFile = document.querySelector("#challenge-img-edit");
      frm.append("challenge-img-edit", photoFile.files[0]);
      axios
        .post(
          "http://localhost:9999/api/v1/challenge-participate/ing/challengIng-img",
          frm,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(({ data }) => {
          this.img = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async postChallengeIng() {
      if (!this.img || !this.content) {
        alert("작성해야 합니다.");
        return;
      }
      await this.$store
        .dispatch("postChallengeIng", {
          challengeParticipateId: Number(this.$route.params.id),
          idx: Number(this.index),
          content: this.content,
          img: this.img,
        })
        .then(() => {
          this.$router.push({
            name: "mypage-challenge-main",
            params: { id: this.$route.params.id },
          });
        });
    },
  },
};
</script>

<style></style>
