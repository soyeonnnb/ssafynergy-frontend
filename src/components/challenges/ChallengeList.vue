<!-- 챌린지 검색 -->

<template>
  <div>
    <h2>챌린지 리스트</h2>
    <!-- 전체 챌린지 리스트 -->
    <div v-if="challenges.length">
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
  name: "challengeList",
  components: {
    ListRow,
  },
  computed: {
    ...mapGetters(["challenges"]),
  },
  created() {
    this.$store.dispatch("getChallenges");
  },
};
</script>

<style></style>
