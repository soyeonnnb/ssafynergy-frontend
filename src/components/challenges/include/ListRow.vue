<template>
  <tr @click="goDetail">
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
  },
  methods: {
    goDetail() {
      this.$router.push({
        name: "challege-detail-view",
        params: { id: this.challenge.id },
      });
    },
  },
};
</script>
