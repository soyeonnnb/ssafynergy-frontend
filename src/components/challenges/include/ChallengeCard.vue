<template>
  <div class="card" @click="goDetail" v-if="index <= 5">
    <img src="@/assets/img/main_img.jpg" class="card-img" />
    <div class="card-info">
      <div class="card-info_title">{{ challenge.name }}</div>
      <!-- <div class="card-info_description">{{ challenge. }}</div> -->
      <div class="card-info_date">
        {{ challenge.startAt.substring(0, 10) }} 부터
        {{ challenge.finishAt.substring(0, 10) }} 까지
      </div>
      <div class="card-info_person">{{ challenge.limitPersonNum }} 명</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "challenge-card",
  props: {
    challenge: Object,
    no: Number,
    index: Number,
  },
  methods: {
    goDetail() {
      this.$router.push({
        name: "challenge-detail-view",
        params: { id: this.challenge.id },
      });
    },
  },
};
</script>
<style scoped>
.card {
  width: 300px;
  height: 330px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  transition: all 0.2s ease-out;
}
.card:hover {
  cursor: pointer;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.471);
}

.card-img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  margin-bottom: 20px;
}
.card-info {
  padding-left: 20px;
  justify-content: start;
}
.card-info > div {
  text-align: start;
  margin-bottom: 13px;
}
.card-info_title {
  font-size: 23px;
}
</style>
