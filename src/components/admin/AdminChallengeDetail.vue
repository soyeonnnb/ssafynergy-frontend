<!-- admin challenge detail -->
<template>
  <div class="admin_page">
    <div>
      <!-- <label for="name">챌린지명</label> -->
      <div style="font-size: 30px; text-align: left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ challenge.name }}
      </div>
      <div class="tablehead">기본정보</div>
      <div style="background-color: white">
        <table>
          <!-- <thead style="background-color: gray">
            <tr style="height: 50px">
              <td>기본정보</td>
              <td></td>
            </tr>
          </thead> -->
          <colgroup>
            <col style="width: 30%; background-color: #e3e3e3" />
            <col style="width: 70%" />
          </colgroup>
          <tbody>
            <tr>
              <td>챌린지 난이도</td>
              <td v-if="challenge.challengeDifficultyId == 1">쉬움</td>
              <td v-if="challenge.challengeDifficultyId == 2">보통</td>
              <td v-if="challenge.challengeDifficultyId == 3">어려움</td>
            </tr>
            <tr>
              <td>챌린지 기간</td>
              <td>{{ challenge.startAt }} ~ {{ challenge.finishAt }}</td>
            </tr>
            <tr>
              <td>일 수</td>
              <td>{{ challenge.totalDay }}일</td>
            </tr>
            <tr>
              <td>모집 인원</td>
              <td>{{ challenge.limitPersonNum }} 명</td>
            </tr>
            <tr>
              <td>상세 설명</td>
              <td>{{ challenge.description }}</td>
            </tr>
            <tr>
              <td>공개여부</td>
              <td v-if="challenge.isPublicType == false">비공개</td>
              <td v-if="challenge.isPublicType == true">공개</td>
            </tr>
          </tbody>
        </table>
        <div style="padding-top: 15px">
          <router-link to="/admin/challenge" class="btn">목록</router-link> |
          <button @click="movePageModify">수정</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChallengeDetail",
  components: {},
  computed: {
    ...mapGetters(["challenge", "reviews"]),
  },
  created() {
    this.$store.dispatch("getChallenge", Number(this.$route.params.id));
  },
  methods: {
    movePageModify() {
      // console.log("ID:", this.$route.params.id);
      this.$router.push({
        name: "admin-challenge-update",
        params: { id: this.$route.params.id },
      });
    },
  },
};
</script>

<style scoped>
.admin_page {
  padding-top: 120px;
  padding-left: 400px;
}
.tablehead {
  background-color: gray;
  width: 80%;
  height: 40px;
  vertical-align: middle;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding-left: 80px;
  color: white;
}
table {
  /* margin-top: 50px; */
  width: 80%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
  margin: 40px;
}
tr {
  height: 60px;
}
th,
td {
  border-bottom: 1px solid #444444;
  padding: 10px;
}
td {
  text-align: left;
  font-size: 15px;
  padding-left: 20px;
  vertical-align: middle;
}
</style>
