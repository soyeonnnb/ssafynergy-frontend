<!-- 챌린지 리스트 -->
<template>
  <div class="admin_page">
    <!-- 챌린지 검색 -->
    <div>
      <a>챌린지 검색</a>
      <div>
        <table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <input
                  type="text"
                  name="searchKeyword"
                  id="searchKeyword"
                  v-model="searchKeyword"
                  placeholder="챌린지명을 검색하세요."
                />
              </td>
            </tr>
            <tr>
              <td>난이도</td>
              <td>
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
              </td>
            </tr>
          </tbody>
        </table>
        <button @click="searchC">검색</button>
      </div>
    </div>
    <h2>검색 결과 리스트</h2>
    <!-- 검색 결과 리스트 -->
    <div v-if="searchChallenges.length">
      <table class="styled-table">
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
      <table id="challenge-list" class="styled-table">
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
.styled-table {
  border-collapse: collapse;
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
  text-align: left;
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
</style>
