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
        />
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
          <br />
        </div>
        <button @click="searchC">검색</button>
      </div>
    </div>
    <h2>검색 결과 리스트</h2>
    <!-- 검색 결과 리스트 -->
    <div v-if="searchChallenges.length">
      <table>
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 25%" />
          <col style="width: 10%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>챌린지 명</th>
            <th>시작일</th>
            <th>종료일</th>
            <th>설명</th>
            <th>모집인원</th>
          </tr>
        </thead>
        <tbody>
          <list-row
            v-for="(challenge, index) in searchChallenges"
            :key="index"
            :no="index + 1"
            :challenge="challenge"
          />
        </tbody>
      </table>
    </div>
    <div v-else>
      <table id="challenge-list">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 25%" />
          <col style="width: 10%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>챌린지 명</th>
            <th>시작일</th>
            <th>종료일</th>
            <th>설명</th>
            <th>모집인원</th>
          </tr>
        </thead>
        <tbody>
          <list-row
            v-for="(challenge, index) in challenges"
            :key="index"
            :no="index + 1"
            :challenge="challenge"
          />
        </tbody>
      </table>
    </div>
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
    ...mapGetters(["searchChallenges", "challenges"]),
  },
  created() {
    this.$store.dispatch("getChallenges");
  },
  methods: {
    searchC() {
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
  background-color: aqua;
  width: 500px;
  padding: 20px 50px;
}
.challenge-search-box > div {
  width: 100%;
  background-color: aquamarine;
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
.challenge-search-radio {
  width: fit-content;
  border: 1px solid #666;
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
  padding: 10px 16px;
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
</style>
