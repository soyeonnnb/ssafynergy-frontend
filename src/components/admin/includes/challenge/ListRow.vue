<template>
  <tr @click="goDetail">
    <td>{{ no }}</td>
    <td>{{ challenge.name }}</td>
    <td>{{ challenge.startAt.substring(0, 10) }}</td>
    <td>{{ challenge.finishAt.substring(0, 10) }}</td>
    <td>{{ challenge.limitPersonNum }}명</td>
  </tr>
</template>

<script>
export default {
  name: "ListRow",
  props: {
    challenge: Object,
    no: Number,
  },
  methods: {
    goDetail() {
      this.$router.push({
        name: "admin-challenge-detail",
        params: { id: this.challenge.id },
      });
    },
  },
};
</script>
