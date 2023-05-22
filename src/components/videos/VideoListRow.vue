<template>
  <div>
    {{ video.youtubeId }}
  </div>
</template>

<script>
export default {
  name: "video-list-row",
  props: {
    video: Object,
  },
};
</script>

<style></style>
