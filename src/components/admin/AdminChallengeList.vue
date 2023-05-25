<!-- 챌린지 리스트 -->
<template>
  <div class="admin_page">
    <!-- 챌린지 검색 -->
    <div class="admin-challenge-list">
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

      <h2>검색 결과 리스트</h2>
      <!-- 검색 결과 리스트 -->
      <table class="styled-table" v-if="searchChallenges.length">
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
            <th>no</th>
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
      <table id="challenge-list" class="styled-table" v-else>
        <colgroup>
          <col style="width: 50px" />
          <col style="width: 20%" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
        </colgroup>
        <thead>
          <tr>
            <th>no</th>
            <th>챌린지 명</th>
            <th>시작일</th>
            <th>종료일</th>
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
import ListRow from "@/components/admin/includes/challenge/ListRow.vue";
export default {
  name: "challengeSearch",
  data() {
    return {
      searchKeyword: "", // 검색 키워드
      selectedDifficulty: "", // 선택한 난이도를 저장하는 변수
      selectedPossibility: "", // 선택한 신청가능 여부를 저장하는 변수
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
.admin_page {
  padding-top: 120px;
  padding-left: 400px;
}
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
.styled-table {
  border-collapse: collapse;
  white-space: nowrap;
  width: 80%;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
.admin-challenge-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
