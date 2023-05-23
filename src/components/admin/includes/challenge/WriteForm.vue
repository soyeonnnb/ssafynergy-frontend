<template>
  <div>
    <div>
      <label for="name">챌린지 이름</label>
      <input type="text" id="name" v-model="challenge.name" required />
      <div style="display: flex; justify-content: center">
        난이도 선택 :
        <input
          type="radio"
          value="1"
          id="diff1"
          v-model="challenge.challengeDifficultyId"
          required
        />
        <label for="diff1">쉬움</label>
        <br />
        <input
          type="radio"
          value="2"
          id="diff2"
          v-model="challenge.challengeDifficultyId"
          required
        />
        <label for="diff2">보통</label>
        <br />
        <input
          type="radio"
          value="3"
          id="diff3"
          v-model="challenge.challengeDifficultyId"
          required
        />
        <label for="diff3">어려움</label>
        <br />
      </div>
      <label for="startAt">시작일</label>
      <input
        type="date"
        id="startAt"
        v-model="challenge.startAt"
        required
      /><br />
      <label for="finishAt">종료일</label>
      <input
        type="date"
        id="finishAt"
        v-model="challenge.finishAt"
        required
      /><br />
      <label for="limitPersonNum">챌린지 인원수</label>
      <input
        type="number"
        id="limitPersonNum"
        v-model="challenge.limitPersonNum"
      /><br />
      <label for="totalDay">챌린지 일수</label>
      <input
        type="number"
        id="totalDay"
        v-model="challenge.totalDay"
        required
      /><br />
      <label for="description">챌린지 상세설명</label>
      <textarea
        id="description"
        v-model="challenge.description"
        required
      ></textarea>
    </div>

    <button v-if="type == 'create'" @click="createChallenge">등록</button>
    <button v-if="type == 'modify'" @click="modifyChallenge">수정</button>
    <!-- <button @click="moveList">목록</button> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AdminChallengeCreate",
  props: {
    type: String,
  },
  computed: {
    ...mapState(["challenge"]),
  },
  created() {
    if (this.type == "create") {
      this.$store.dispatch("challengeClear");
    } else {
      const id = this.$route.params.id;
      this.$store.dispatch("getChallenge", id).catch(() => {
        alert("잘못된 접근입니다.");
        this.$router.push({ name: "admin-main" });
      });
    }
  },
  methods: {
    createChallenge() {
      if (
        !this.challenge.name ||
        !this.challenge.challengeDifficultyId ||
        !this.challenge.startAt ||
        !this.challenge.finishAt ||
        !this.challenge.limitPersonNum ||
        !this.challenge.totalDay ||
        !this.challenge.description
      ) {
        alert("폼 입력");
        return;
      }
      this.$store
        .dispatch("challengeCreate", {
          name: this.challenge.name,
          challengeDifficultyId: this.challenge.challengeDifficultyId,
          startAt: this.challenge.startAt,
          finishAt: this.challenge.finishAt,
          limitPersonNum: this.challenge.limitPersonNum,
          totalDay: this.challenge.totalDay,
          description: this.challenge.description,
        })
        .then(() => {
          this.goChallengeList();
        });
    },
    modifyChallenge() {},
    goChallengeList() {
      this.$router.push({ name: "admin-challenge-list" });
    },
  },
};
</script>

<style></style>
