<template>
  <tr @click="goDetail" v-if="index <= 5">
    <td>{{ no }}</td>
    <td>{{ challenge.name }}</td>
    <td>{{ challenge.startAt }}</td>
    <td>{{ challenge.finishAt }}</td>
    <td>{{ challenge.description }}</td>
    <td>{{ challenge.limitPersonNum }}명</td>
  </tr>
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
