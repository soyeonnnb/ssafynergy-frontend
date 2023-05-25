<template>
  <div class="challenge-ing-obj">
    <div>
      <span>{{ ing.idx }}일차</span>
    </div>
    <div>
      <img
        v-if="ing.img"
        :src="`http://localhost:9999/upload/challenge_ing/${ing.img}`"
      />
      <!-- <img v-else src="@/assets/img/mypage_img.jpg" /> -->
    </div>
    <div>
      <span>{{ ing.content }}</span>
    </div>

    <td></td>
  </div>
</template>

<script>
export default {
  props: {
    ing: Object,
  },
};
</script>

<style scope>
.challenge-ing-obj {
  /* background-color: aqua; */
  /* margin-bottom: 30px; */
  height: 350px;
  width: 250px;
  /* flex-grow: 1; */
  /* justify-self: start; */
  margin: 0 10px 20px;
  border-radius: 5px;
  border: 1px solid rgb(201, 201, 201);
  box-sizing: border-box;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.challenge-ing-obj > div:first-child {
  font-size: 25px;
  /* margin-bottom: 20px; */
  width: 100%;
  padding-bottom: 20px;
}
.challenge-ing-obj > div:nth-child(2) {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  /* background-color: azure; */
  margin-bottom: 20px;
}
.challenge-ing-obj > div:nth-child(2) img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
