<!-- 영상 뷰 -->
<template>
  <div>
    <h2>영상 검색</h2>
    <input type="text" v-model="content" />
    <button @click="search">검색</button>

    <h4>비디오 리스트</h4>
    <div>
      <video-list-row
        v-for="video in youtubeVideos"
        :key="video.youtubeId"
        :video="video"
      ></video-list-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VideoListRow from "./VideoListRow.vue";
export default {
  name: "video-view",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    search() {
      this.$store.dispatch("youtubeSearch", this.content);
    },
  },
  computed: {
    ...mapState(["youtubeVideos"]),
  },
  components: {
    VideoListRow,
  },
};
</script>

<style></style>
