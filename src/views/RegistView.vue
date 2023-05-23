<template>
  <div>
    <!-- 편의상 추가 -->
    <home-nav></home-nav>
    <h2>회원가입</h2>
    <div>
      아이디
      <input type="text" v-model.trim="user.id" id="id" required />
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
      <input type="email" v-model.trim="user.email" id="email" required />
    </div>
    <div>
      성명
      <input type="text" v-model.trim="user.name" id="name" required />
    </div>
    <div>
      닉네임
      <input type="text" v-model.trim="user.nickname" id="nickname" required />
    </div>
    <div>
      성별
      <input
        type="radio"
        name="gender"
        v-model.trim="user.gender"
        value="M"
        id="genderMale"
      />
      <label for="genderMale">남성</label>
      <input
        type="radio"
        name="gender"
        v-model.trim="user.gender"
        value="F"
        id="genderFemale"
      />
      <label for="genderFemale">여성</label>
    </div>
    <div>
      생년월일
      <input type="date" v-model.trim="user.birth" id="birth" required />
    </div>
    <div>
      프로필 사진
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        @change="setProfileImg"
        id="profile-img-edit"
      />
    </div>
    <div>
      코멘트
      <input type="text" v-model.trim="user.comment" id="comment" required />
    </div>
    <div>
      <button @click="regist">회원가입</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import homeNav from "@/components/common/homeNav.vue";
import axios from "axios";
export default {
  components: {
    homeNav,
  },
  name: "regist-view",
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      password: "",
      passwordCheck: "",
      passwordCheckInfo: "",
    };
  },
  created() {
    this.$store.commit("CLEAR_USER");
  },
  methods: {
    passwordIsSame() {
      if (this.password.length === 0 || this.passwordCheck.length === 0) {
        this.passwordCheckInfo = "";
      } else if (this.password === this.passwordCheck) {
        this.passwordCheckInfo = "비밀번호가 일치합니다.";
      } else {
        this.passwordCheckInfo = "비밀번호가 일치하지 않습니다.";
      }
    },
    setProfileImg() {
      const frm = new FormData();
      const photoFile = document.querySelector("#profile-img-edit");
      frm.append("profile-img-edit", photoFile.files[0]);
      axios
        .post("http://localhost:9999/api/v1/user/profileImg", frm, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          this.user.img = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async regist() {
      if (this.password !== this.passwordCheck) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      await this.$store
        .dispatch("userRegist", {
          id: this.user.id,
          password: this.password,
          email: this.user.email,
          name: this.user.name,
          nickname: this.user.nickname,
          gender: this.user.gender,
          birth: this.user.birth,
          comment: this.user.comment,
          img: this.user.img,
        })
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
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
