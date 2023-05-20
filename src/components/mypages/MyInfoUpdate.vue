<!-- 내 정보 수정 -->
<template>
  <div>
    <h2>내 정보 수정</h2>
    <div>
      <table>
        <tbody>
          <tr>
            <th>아이디</th>
            <td>{{ user.id }}</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <th>이름</th>
            <td>{{ user.name }}</td>
          </tr>
          <tr>
            <th>닉네임</th>
            <td>
              <input type="text" v-model.trim="user.nickname" />
            </td>
          </tr>
          <tr>
            <th>성별</th>
            <td>{{ user.gender }}</td>
          </tr>
          <tr>
            <th>생년월일</th>
            <td>{{ user.birth }}</td>
          </tr>
          <tr>
            <th>한줄 코멘트</th>
            <td><input type="text" v-model="user.comment" /></td>
          </tr>
        </tbody>
      </table>
      <button @click="modify">수정</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "my-info-update",
  computed: {
    ...mapState(["user"]),
  },
  created() {
    const user = this.$store.getters.loginUser;
    this.$store.dispatch("getUserInfo", user.id);
  },
  methods: {
    modify() {
      this.$store
        .dispatch("userInfoUpdate", {
          id: this.user.id,
          nickname: this.user.nickname,
          comment: this.user.comment,
        })
        .then(() => {
          this.$router.push({ name: "mypage-info" });
        });
    },
  },
};
</script>

<style></style>
