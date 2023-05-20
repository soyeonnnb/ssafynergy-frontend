<!-- 내 정보 보기 -->
<template>
  <div>
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

<style></style>
