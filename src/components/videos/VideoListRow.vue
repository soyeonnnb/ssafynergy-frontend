<template>
  <div class="youtube-video">
    <div class="youtube-video-infos" @click="toggleIframe">
      <img :src="video.thumbnail" :alt="`${video.title}이미지`" />
      <div class="youtube-video-info">
        <div>
          <span class="youtube-video-title">{{ video.title }}</span>
          <span class="youtube-video-description">{{ video.description }}</span>
        </div>
        <div>
          <span class="youtube-video-createdAt">{{ video.createdAt }}</span>
          <span class="youtube-video-channelId">{{ video.channelId }}</span>
        </div>
      </div>
    </div>
    <div class="youtube-video-iframe" v-if="iframeShow">
      <iframe
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${video.youtubeId}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "video-list-row",
  props: {
    video: Object,
  },
  data() {
    return {
      iframeShow: false,
    };
  },
  methods: {
    toggleIframe() {
      this.iframeShow = !this.iframeShow;
    },
  },
};
</script>

<style>
.youtube-video {
  /* background-color: aqua; */
  padding: 20px 20px;
  box-sizing: border-box;
}
.youtube-video:hover {
  cursor: pointer;
}
.youtube-video-infos {
  /* background-color: aquamarine; */
  display: flex;
  width: 100%;
}
.youtube-video-infos img {
  height: 150px;
  margin-right: 20px;
}
.youtube-video-info {
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
  /* display: block; */
  /* background-color: antiquewhite; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.youtube-video-info span {
  text-align: start;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.youtube-video-title {
  font-size: 20px;
  margin-bottom: 15px;
}
/* .youtube-video-createdAt {
}*/
.youtube-video-channelId {
  margin-top: 10px;
}
.youtube-video-iframe {
  margin-top: 30px;
}
</style>
