<!-- 내 정보 수정 -->
<template>
  <div class="myinfo-view">
    <h2>내 정보 수정</h2>
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
            <input
              type="text"
              v-model.trim="user.nickname"
              class="info-input"
            />
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
          <td>
            <input type="text" v-model="user.comment" class="info-input" />
          </td>
        </tr>
      </tbody>
    </table>
    <span @click="modify" class="info-modify-btn">수정</span>
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
.info-input {
  width: 80%;
  padding: 10px 20px;
  outline: none;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 50px;
}
.info-input:focus,
.info-input:hover {
  box-shadow: 0 0 4px rgb(182, 182, 182);
}
.info-modify-btn {
  padding: 20px 40px;
  margin-top: 20px;
  background-color: rgb(111, 67, 131);
  color: white;
  border-radius: 5px;
  transition: all 0.1s ease-out;
}
.info-modify-btn:hover {
  cursor: pointer;
  box-shadow: 0 0 5px rgb(111, 67, 131);
}
</style>
