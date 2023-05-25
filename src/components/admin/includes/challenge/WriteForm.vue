<template>
  <div class="challenge-form-view">
    <div>
      <div class="tablehead">기본정보</div>
      <div class="tablebody">
        <table>
          <colgroup>
            <col style="width: 30%; background-color: #e3e3e3" />
            <col style="width: 70%" />
          </colgroup>
          <tbody>
            <tr>
              <td><label for="name">챌린지 이름</label></td>
              <td>
                <input
                  class="challenge-create-input"
                  type="text"
                  id="name"
                  v-model="challenge.name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>난이도 선택 :</td>
              <td>
                <div style="display: flex">
                  <input
                    type="radio"
                    value="1"
                    id="diff1"
                    v-model="challenge.challengeDifficultyId"
                    required
                  />
                  <label for="diff1">쉬움</label>
                  <input
                    type="radio"
                    value="2"
                    id="diff2"
                    v-model="challenge.challengeDifficultyId"
                    required
                  />
                  <label for="diff2">보통</label>
                  <input
                    type="radio"
                    value="3"
                    id="diff3"
                    v-model="challenge.challengeDifficultyId"
                    required
                  />
                  <label for="diff3">어려움</label>
                </div>
              </td>
            </tr>
            <tr>
              <td><label for="startAt">시작일</label></td>
              <td>
                <input
                  type="date"
                  class="challenge-create-input"
                  id="startAt"
                  v-model="challenge.startAt"
                  required
                /><br />
              </td>
            </tr>
            <tr>
              <td><label for="finishAt">종료일</label></td>
              <td>
                <input
                  type="date"
                  class="challenge-create-input"
                  id="finishAt"
                  v-model="challenge.finishAt"
                  required
                /><br />
              </td>
            </tr>
            <tr>
              <td><label for="img">이미지</label></td>
              <td>
                <input
                  type="file"
                  class="challenge-create-input"
                  id="challenge-img-edit"
                  required
                  accept=".png, .jpg, .jpeg"
                  @change="setChallengeImg"
                /><br />
              </td>
            </tr>
            <tr>
              <td><label for="limitPersonNum">챌린지 인원수</label></td>
              <td>
                <input
                  class="challenge-create-input"
                  type="number"
                  min="0"
                  id="limitPersonNum"
                  v-model="challenge.limitPersonNum"
                /><br />
              </td>
            </tr>
            <tr>
              <td><label for="totalDay">챌린지 일수</label></td>
              <td>
                <input
                  class="challenge-create-input"
                  type="number"
                  min="0"
                  id="totalDay"
                  v-model="challenge.totalDay"
                  required
                /><br />
              </td>
            </tr>
            <tr>
              <td><label for="description">챌린지 상세설명</label></td>
              <td>
                <textarea
                  class="challenge-create-input"
                  id="description"
                  v-model="challenge.description"
                  required
                ></textarea>
              </td>
            </tr>
          </tbody>
          <!-- <div >
          </div> -->
        </table>
      </div>
    </div>

    <button
      v-if="type == 'create'"
      @click="createChallenge"
      class="round-input"
      style="width: 150px"
    >
      등록
    </button>
    <button
      v-if="type == 'modify'"
      @click="modifyChallenge"
      class="round-input"
      style="width: 150px"
    >
      수정
    </button>
    <!-- <button @click="moveList">목록</button> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "AdminChallengeCreate",
  props: {
    type: String,
  },
  data() {
    return {
      img: "",
    };
  },
  computed: {
    ...mapState(["challenge"]),
  },
  created() {
    if (this.type == "create") {
      this.$store.dispatch("challengeClear");
    } else {
      const id = this.$route.params.id;
      this.$store.dispatch("getChallenge", id).catch(() => {
        alert("잘못된 접근입니다.");
        this.$router.push({ name: "admin-main" });
      });
    }
  },
  methods: {
    setChallengeImg() {
      const frm = new FormData();
      const photoFile = document.querySelector("#challenge-img-edit");
      frm.append("challenge-img-edit", photoFile.files[0]);
      axios
        .post("http://localhost:9999/api/v1/challenge/challenge-img", frm, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          console.log(data);
          this.challenge.img = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createChallenge() {
      if (
        !this.challenge.name ||
        !this.challenge.challengeDifficultyId ||
        !this.challenge.startAt ||
        !this.challenge.finishAt ||
        !this.challenge.limitPersonNum ||
        !this.challenge.totalDay ||
        !this.challenge.description ||
        !this.challenge.img
      ) {
        alert("폼 입력");
        return;
      }
      this.$store
        .dispatch("challengeCreate", {
          name: this.challenge.name,
          challengeDifficultyId: this.challenge.challengeDifficultyId,
          startAt: this.challenge.startAt,
          finishAt: this.challenge.finishAt,
          limitPersonNum: this.challenge.limitPersonNum,
          totalDay: this.challenge.totalDay,
          description: this.challenge.description,
          img: this.challenge.img,
        })
        .then(() => {
          this.goChallengeList();
        });
    },
    modifyChallenge() {},
    goChallengeList() {
      this.$router.push({ name: "admin-challenge-list" });
    },
  },
};
</script>

<style scoped>
.challenge-form-view {
  width: 80%;
  /* background-color: antiquewhite; */
}
.tablebody {
  display: flex;
  justify-content: center;
}
.tablehead {
  background-color: gray;
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
.challenge-create-input {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 50px;
  box-sizing: border-box;
}
.challenge-create-input:focus,
.challenge-create-input:hover {
  box-shadow: 0 0 4px rgb(182, 182, 182);
}
textarea.challenge-create-input {
  resize: vertical;
}
</style>
