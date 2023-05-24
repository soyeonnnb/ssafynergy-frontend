<!-- 커뮤니티 글 디테일 -->
<template>
  <div>
    <div class="box">
      <div class="post-part">
        <community-post-detail-view-vue
          :post="post"
        ></community-post-detail-view-vue>
        <community-post-like
          :isLike="post.isLike"
          :boardId="Number(post.id)"
        ></community-post-like>
      </div>
      <comment-view></comment-view>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommunityPostDetailViewVue from "./includes/CommunityPostDetailView.vue";
import CommentView from "./comments/CommentView.vue";
import CommunityPostLike from "./includes/CommunityPostLike.vue";
export default {
  name: "community-board-detail",
  computed: {
    ...mapState(["post"]),
  },
  components: {
    CommunityPostDetailViewVue,
    CommentView,
    CommunityPostLike,
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const id = Number(this.$route.params.id);
      this.$store
        .dispatch("getBoardPost", id)
        .then(() => {
          this.$store.dispatch("postViewCntPlus", id);
          this.$store.dispatch("getPostComments", id);
        })
        .catch(() => {
          alert("존재하지 않는 게시글입니다.");
          this.$router.push({ name: "community-board" });
        });
    },
  },
  $route() {
    this.init();
  },
};
</script>

<style>
.box {
  width: 800px;
  margin-top: 10px;
}
.box > div:first-child {
  width: 100%;
}
.post-part {
  margin-bottom: 50px;
}
</style>
