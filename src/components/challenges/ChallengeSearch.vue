<!-- 챌린지 검색 -->
<template>
  <div class="challenge-search-main">
    <!-- 챌린지 검색 -->
    <div>
      <h2>챌린지 검색</h2>
      <div class="challenge-search-box">
        <input
          class="challenge-search-input"
          type="text"
          name="searchKeyword"
          id="searchKeyword"
          v-model="searchKeyword"
          placeholder="챌린지명을 검색하세요."
          @keyup.enter="searchC"
        />
        <div class="challenge-search-radio-box">
          <div class="challenge-search-radio-name"><span> 난이도 </span></div>
          <div class="challenge-search-radio">
            <input
              type="radio"
              id="diff0"
              name="difficulty"
              value="0"
              checked="checked"
              v-model="selectedDifficulty"
            />
            <label for="diff0">상관없음</label>
            <br />
            <input
              type="radio"
              id="diff1"
              name="difficulty"
              value="1"
              v-model="selectedDifficulty"
            />
            <label for="diff1">쉬움</label>
            <br />
            <input
              type="radio"
              id="diff2"
              name="difficulty"
              value="2"
              v-model="selectedDifficulty"
            />
            <label for="diff2">보통</label>
            <br />
            <input
              type="radio"
              id="diff3"
              name="difficulty"
              value="3"
              v-model="selectedDifficulty"
            />
            <label for="diff3">어려움</label>
          </div>
        </div>
        <button
          @click="searchC"
          class="challenge-search-input challenge-search-input-btn"
        >
          검색
        </button>
      </div>
    </div>
    <!-- 검색 결과 리스트 -->
    <div v-if="searchChallenges.length" class="challenge-search-row">
      <h2>검색 결과 리스트</h2>
      <list-row
        v-for="(challenge, index) in searchChallenges"
        :key="index"
        :no="index + 1"
        :challenge="challenge"
      />
    </div>
    <!-- <div v-else class="challenge-search-row">
      <list-row
        v-for="(challenge, index) in challenges"
        :key="index"
        :no="index + 1"
        :challenge="challenge"
      />
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListRow from "@/components/challenges/include/ListRow.vue";

export default {
  name: "challengeSearch",
  data() {
    return {
      searchKeyword: "", // 검색 키워드
      selectedDifficulty: "", // 선택한 난이도를 저장하는 변수
    };
  },
  components: {
    ListRow,
    // reListRow,
  },
  computed: {
    ...mapGetters(["searchChallenges"]),
  },
  created() {
    this.$store.state.searchChallenges = [];
    // this.searchChallenges = [];
    // this.$store.dispatch("getChallenges");
  },
  methods: {
    searchC() {
      console.log(this.selectedDifficulty);
      this.$store.dispatch("getSearchChallenges", {
        selectedDifficulty: Number(this.selectedDifficulty),
        searchKeyword: this.searchKeyword,
      });
    },
  },
};
</script>

<style>
.challenge-search-main {
  margin-top: 100px;
}
.challenge-search-box {
  /* background-color: aqua; */
  width: 500px;
  padding: 50px 50px 20px 50px;
  border-radius: 4px;
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0 0 1px rgb(210, 210, 210);
  margin-bottom: 50px;
}
.challenge-search-input {
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 50px;
  margin-bottom: 20px;
}
.challenge-search-input:focus,
.challenge-search-input:hover {
  box-shadow: 0 0 4px rgb(182, 182, 182);
}
.challenge-search-radio-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  /* background-color: aliceblue; */
}
.challenge-search-radio-name {
  /* background-color: #c2c2c2; */
  font-size: 20px;
}
.challenge-search-radio {
  width: fit-content;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
}
.challenge-search-radio input {
  display: none;
}
.challenge-search-radio label {
  font-family: sans-serif;
  padding: 10px 20px;
  border-right: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.3s;
}
.challenge-search-radio label:last-of-type {
  border-right: 0;
}
.challenge-search-radio label:hover {
  background: #eee;
}
.challenge-search-radio input:checked + label {
  background: #becbff;
}
.challenge-search-input-btn:hover {
  cursor: pointer;
}
</style>
