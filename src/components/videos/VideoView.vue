<!-- 영상 뷰 -->
<template>
  <div class="video-main">
    <div class="video-input">
      <input
        type="text"
        v-model="content"
        placeholder="검색어를 입력해주세요"
        @keyup.enter="search"
      />
      <div class="video-search-btn" @click="search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div class="youtube-videos">
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

<style>
.video-main {
  margin-top: 100px;
  max-width: 1000px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.video-input {
  max-width: 800px;
  width: 80%;
  min-width: 500px;
  position: relative;
  margin-bottom: 40px;
}
.video-input input {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 50px;
}
.video-input input:focus,
.video-input input:hover {
  box-shadow: 0 0 4px rgb(182, 182, 182);
}
.video-search-btn {
  position: absolute;
  top: 11px;
  right: -15px;
}
.video-search-btn:hover {
  cursor: pointer;
}
.youtube-videos {
  width: 100%;
}
.youtube-videos > div {
  border-bottom: 1px solid rgb(202, 202, 202);
}
.youtube-videos > div:first-child {
  border-top: 1px solid rgb(202, 202, 202);
}
</style>
