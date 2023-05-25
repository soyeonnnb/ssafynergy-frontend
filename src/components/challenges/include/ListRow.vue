<template>
  <div @click="goDetail" class="challenge-search-result">
    <img src="@/assets/img/profile_circle_img.jpg" alt="" />
    <div>
      <span>{{ challenge.name }}</span>
      <span
        >{{ challenge.startAt.substring(0, 10) }}-
        {{ challenge.finishAt.substring(0, 10) }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ListRow",
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
.challenge-search-result {
  background-color: antiquewhite;
  width: 100%;
  height: 100px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-out;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0px 0 4px rgba(0, 0, 0, 0.25);
}
.challenge-search-result:hover {
  cursor: pointer;
  box-shadow: 0px 0 9px rgba(0, 0, 0, 0.471);
}
/* .challenge-search-result {
  display: flex;
  border-radius: inherit;
  align-items: center;
} */
.challenge-search-result img {
  width: 120px;
  height: 100px;
  object-fit: cover;
  border-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: 10px;
}
.challenge-search-result div {
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
