<template>
  <div>
    챌린지 ing !
    {{ ing.content }}
    {{ ing.idx }}
    <td>
      <img
        :src="`http://localhost:9999/upload/challenge_ing/${ing.img}`"
        width="50px"
      />
    </td>
  </div>
</template>

<script>
export default {
  props: {
    ing: Object,
  },
};
</script>

<style></style>
