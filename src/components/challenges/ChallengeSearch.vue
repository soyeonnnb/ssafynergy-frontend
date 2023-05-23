<!-- 챌린지 검색 -->

<template>
  <div>
    <h2>챌린지 검색</h2>
    <div>
      <div>
        <input
          type="text"
          name="searchKeyword"
          id="searchKeyword"
          v-model="searchKeyword"
        />
      </div>
      <div style="display: flex; justify-content: center">
        난이도 선택 :
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
      <div style="display: flex; justify-content: center">
        신청가능 여부 :
        <input
          type="radio"
          id="possible"
          name="possibility"
          value="true"
          v-model="selectedPossibility"
        />
        <label for="possible">가능</label>
        <br />
        <input
          type="radio"
          id="impossible"
          name="possibility"
          value="false"
          v-model="selectedPossibility"
        />
        <label for="impossible">불가능</label>
        <br />
      </div>
      <button @click="searchC">검색</button>
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
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import http from "@/util/httpCommon";
import ListRow from "@/components/challenges/include/ListRow.vue";
// import reListRow from "@/components/challenges/include/reListRow.vue";

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
    ...mapGetters(["searchChallenges"]),
  },
  methods: {
    searchC() {
      this.$store.dispatch(
        "getSearchChallenges",
        Number(this.selectedDifficulty)
      );
    },
  },
};
</script>

<style></style>
