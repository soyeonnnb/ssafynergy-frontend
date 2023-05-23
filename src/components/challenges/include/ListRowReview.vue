<template>
  <tr>
    <td>{{ no }}</td>
    <td>{{ review.title }}</td>
    <td>{{ review.content }}</td>
    <td>{{ review.createdAt }}</td>
    <td @click="goUserHome">{{ review.userId }}</td>
    <td>{{ review.rating }} /5 점</td>
  </tr>
</template>

<script>
export default {
  name: "ListRowReview",
  props: {
    review: Object,
    no: Number,
  },
  methods: {
    goUserHome() {
      this.$router.push({
        name: "mypage-main",
        params: { channelId: this.review.userId },
      });
    },
  },
};
</script>
