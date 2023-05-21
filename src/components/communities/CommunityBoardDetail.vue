<!-- 커뮤니티 글 디테일 -->
<template>
  <div>
    <community-post-detail-view-vue
      :post="post"
    ></community-post-detail-view-vue>
    <comment-view></comment-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommunityPostDetailViewVue from "./includes/CommunityPostDetailView.vue";
import CommentView from "./comments/CommentView.vue";
export default {
  name: "community-board-detail",
  computed: {
    ...mapState(["post"]),
  },
  components: {
    CommunityPostDetailViewVue,
    CommentView,
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

<style></style>
