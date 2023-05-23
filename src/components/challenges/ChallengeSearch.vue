<!-- 챌린지 검색 -->
<template>
  <div>
    <h2>챌린지 검색</h2>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ListRow from "@/components/challenges/include/ListRow.vue";
import reListRow from "@/components/challenges/include/reListRow.vue";

export default {
  name: "challengeList",
  components: {
    ListRow,
    reListRow,
  },
  computed: {
    ...mapGetters(["challenges", "challengesSort"]),
  },
  created() {
    this.$store.dispatch("getChallenges");
    this.$store.dispatch("getChallengesSort", {
      orderBy: "likeCnt",
      orderByDir: "desc",
    });
  },
};
</script>

<style></style>
