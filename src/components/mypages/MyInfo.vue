<!-- 내 정보 보기 -->
<template>
  <div class="myinfo-view">
    <h2>내 정보</h2>
    <table>
      <tbody>
        <tr>
          <th>아이디</th>
          <td>{{ loginUser.id }}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>{{ loginUser.email }}</td>
        </tr>
        <tr>
          <th>이름</th>
          <td>{{ loginUser.name }}</td>
        </tr>
        <tr>
          <th>닉네임</th>
          <td>{{ loginUser.nickname }}</td>
        </tr>
        <tr>
          <th>성별</th>
          <td>{{ loginUser.gender }}</td>
        </tr>
        <tr>
          <th>생년월일</th>
          <td>{{ loginUser.birth }}</td>
        </tr>
        <tr>
          <th>한줄 코멘트</th>
          <td>{{ loginUser.comment }}</td>
        </tr>
        <tr>
          <th>프로필 사진</th>
          <td>
            <img
              v-if="loginUser.img"
              :src="`http://localhost:9999/upload/user/${loginUser.img}`"
            />
            <span v-else>프로필 사진이 없습니다.</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "my-info",
  computed: {
    ...mapState(["loginUser"]),
  },
  created() {
    this.$store.dispatch("setLoginUserInfo");
  },
};
</script>

<style scope>
.myinfo-view {
  width: 100%;
}
.myinfo-view h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
.myinfo-view table {
  width: 80%;
}
.myinfo-view table,
.myinfo-view tr {
  border-collapse: collapse;
  border-top: 1px solid rgb(236, 189, 255);
  border-bottom: 1px solid rgb(236, 189, 255);
  white-space: nowrap;
}
.myinfo-view tr {
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
}
.myinfo-view th {
  background-color: rgb(111, 67, 131);
  color: white;
  width: 200px;
}
</style>
