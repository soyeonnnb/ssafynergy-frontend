<template>
  <li @click="goCategoryDetail">
    {{ category.name }}
  </li>
</template>

<script>
export default {
  name: "board-category-list-row",
  props: {
    category: Object,
  },
  methods: {
    goCategoryDetail() {
      const id = this.$route.params.id;
      if (!id || id !== this.category.id) {
        this.$router.push({
          name: "community-board-detail",
          params: { id: this.category.id },
        });
      }
    },
  },
};
</script>

<style></style>
