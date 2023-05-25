<template>
  <div class="challenge-post-view">
    <div class="challenge-post-form">
      <h2>챌린지 현황 등록</h2>
      <div>
        <input
          type="number"
          v-model.trim="index"
          required
          class="challenge-post-input"
          placeholder="일차"
        />
      </div>
      <div>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          @change="setChallengeImg"
          required
          id="challenge-img-edit"
          class="challenge-post-input"
        />
      </div>
      <div>
        <input
          type="text"
          v-model.trim="content"
          required
          class="challenge-post-input"
          placeholder="코멘트"
        />
      </div>
      <button
        @click="postChallengeIng"
        class="challenge-post-input challenge-post-input__btn"
      >
        등록
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { mapState } from "vuex";
export default {
  data() {
    return {
      index: "",
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

<style scope>
.challenge-post-view {
  width: 100%;
}
.challenge-post-form {
  /* background-color: azure; */
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  padding: 50px;
  font-size: 20px;
  width: 50%;
}
.challenge-post-form h2 {
  margin-bottom: 30px;
}

.challenge-post-input {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 20px;
  transition: all 0.1s ease-out;
}
.challenge-post-input:focus,
.challenge-post-input:hover {
  box-shadow: 0 0 4px rgb(182, 182, 182);
}
.challenge-post-input__btn:hover {
  cursor: pointer;
}
</style>
