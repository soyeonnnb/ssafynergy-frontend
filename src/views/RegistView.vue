<template>
  <div>
    <h2>회원가입</h2>

    <div>
      아이디
      <input type="text" v-model.trim="id" id="id" required />
    </div>
    <div>
      비밀번호
      <input type="password" v-model.trim="password" id="password" required />
    </div>
    <div>
      비밀번호 확인
      <input
        type="password"
        v-model.trim="passwordCheck"
        id="passwordCheck"
        required
      />
      {{ passwordCheckInfo }}
    </div>
    <div>
      이메일
      <input type="email" v-model.trim="email" id="email" required />
    </div>
    <div>
      성명
      <input type="text" v-model.trim="name" id="name" required />
    </div>
    <div>
      닉네임
      <input type="text" v-model.trim="nickname" id="nickname" required />
    </div>
    <div>
      성별
      <input
        type="radio"
        name="gender"
        v-model.trim="gender"
        value="M"
        id="genderMale"
      />
      <label for="genderMale">남성</label>
      <input
        type="radio"
        name="gender"
        v-model.trim="gender"
        value="F"
        id="genderFemale"
      />
      <label for="genderFemale">여성</label>
    </div>
    <div>
      생년월일
      <input type="date" v-model.trim="birth" id="birth" required />
    </div>
    <div>
      프로필 사진
      <input
        type="file"
        ref="profile"
        id="profile"
        required
        accept=".png, .jpg, .jpeg"
      />
    </div>
    <div>
      코멘트
      <input type="text" v-model.trim="comment" id="comment" required />
    </div>
    <div>
      <button @click="regist">회원가입</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "regist-view",
  data() {
    return {
      id: "",
      password: "",
      passwordCheck: "",
      passwordCheckInfo: "",
      email: "",
      name: "",
      nickname: "",
      gender: "",
      birth: "",
      profile: "",
      comment: "",
    };
  },
  methods: {
    passwordIsSame() {
      if (this.password.length === 0 || this.passwordCheck.length === 0) {
        this.passwordCheckInfo = "";
      } else if (this.password === this.passwordCheck) {
        this.passwordCheckInfo = "비밀번호가 일치합니다.";
      } else {
        this.passwordCheckInfo = "비밀번호가 일치하지 않습니다..";
      }
    },
    regist() {
      if (this.password !== this.passwordCheck) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      this.$store.dispatch("userRegist", {
        id: this.id,
        password: this.password,
        passwordCheckInfo: this.passwordCheckInfo,
        email: this.email,
        name: this.name,
        nickname: this.nickname,
        gender: this.gender,
        birth: this.birth,
        profile: this.profile,
        comment: this.comment,
      });
    },
  },
  watch: {
    password() {
      this.passwordIsSame();
    },
    passwordCheck() {
      this.passwordIsSame();
    },
  },
};
</script>

<style></style>
