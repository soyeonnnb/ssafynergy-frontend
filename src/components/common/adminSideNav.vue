<template>
  <div class="side-bar" :class="{ active: isSidebarActive }">
    <div>
      <div class="menu">
        <div class="item">
          <a
            class="sub-btn"
            @click="toggleSubMenu('challenge')"
            id="challengeToggle"
          >
            <i class="fa-solid fa-dumbbell"></i><span>챌린지 관리</span>
            <i
              :class="{
                'fas fa-angle-right dropdown': !isSubMenuActive('challenge'),
                'fas fa-angle-down dropdown': isSubMenuActive('challenge'),
                rotate: isSubMenuActive('challenge'),
              }"
            ></i>
          </a>
          <div
            class="sub-menu"
            v-show="isSubMenuActive('challenge')"
            id="challengeToggleBox"
          >
            <a class="sub-item" @click="goToChallengeList">
              <i class="fa-solid fa-list"></i>챌린지 목록
            </a>
            <a class="sub-item" @click="goToChallengeCreate">
              <i class="fa-solid fa-seedling"></i>챌린지 생성
            </a>
            <a class="sub-item"
              ><i class="fa-solid fa-pencil"></i>챌린지 수정
            </a>
            <a class="sub-item">
              <i class="fa-solid fa-trash"></i>챌린지 삭제
            </a>
            <a class="sub-item">
              <i class="fa-solid fa-stairs"></i>난이도 관리
            </a>
          </div>
        </div>
        <div class="item">
          <a class="sub-btn" @click="toggleSubMenu('board')">
            <i class="fa-solid fa-clipboard-list"></i> <span>게시글 관리</span>
            <i
              :class="{
                'fas fa-angle-right dropdown': !isSubMenuActive('board'),
                'fas fa-angle-down dropdown': isSubMenuActive('board'),
                rotate: isSubMenuActive('board'),
              }"
            ></i>
          </a>
          <div class="sub-menu" v-show="isSubMenuActive('board')">
            <a class="sub-item">
              <i class="fa-regular fa-bell"></i
              >공지사항&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <a class="sub-item">
              <i class="fa-solid fa-splotch"></i
              >자유게시판&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <a class="sub-item">
              <i class="fa-regular fa-comment"></i
              >문의답하기&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <a class="sub-item">
              <i class="fa-solid fa-thumbtack"></i
              >FAQ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <a class="sub-item" @click="goToBroadCategory"
              ><i class="fa-solid fa-wrench"></i>카테고리 관리
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarActive: false,
      activeSubMenu: null,
    };
  },
  methods: {
    toggleSubMenu(subMenu) {
      if (this.activeSubMenu === subMenu) {
        this.activeSubMenu = null;
      } else {
        this.activeSubMenu = subMenu;
      }
    },
    isSubMenuActive(subMenu) {
      return this.activeSubMenu === subMenu;
    },
    goToChallengeList() {
      this.$router.push({ name: "admin-challenge-list" });
    },
    goToChallengeCreate() {
      this.$router.push({ name: "admin-challenge-create" });
    },
    goToBroadCategory() {
      this.$router.push({ name: "admin-board-category" });
    },
  },
};
</script>

<style scoped>
.side-bar {
  background: whitesmoke;
  backdrop-filter: blur(18px);
  width: 250px;
  height: 100vh;
  position: fixed;
  margin-top: 90px;
  overflow-y: auto;
  transition: 0.6s ease;
  transition-property: left;
}

.side-bar::-webkit-scrollbar {
  width: 0px;
}

.side-bar.active {
  left: 0;
}

.side-bar .menu {
  width: 100%;
  margin-top: 10px;
}

.side-bar .menu .item {
  position: relative;
  cursor: pointer;
}

.side-bar .menu .item a {
  color: black;
  font-size: 14px;
  text-decoration: none;
  display: block;
  padding: 5px;
  line-height: 60px;
}

.side-bar .menu .item a:hover {
  background: #dcecef;
  transition: 0.3s ease;
}

.side-bar .menu .item i {
  margin-right: 15px;
}

.side-bar .menu .item a .dropdown {
  position: absolute;
  right: 0;
  margin: 20px;
  transition: 0.3s ease;
}

/* .side-bar .menu .item .sub-menu {
  background: #262627;
  display: none;
} */

.sub-item {
  display: block;
}

.side-bar .menu .item .sub-menu a {
  padding-left: 60px;
  font-size: 14px;
}

.rotate {
  transform: rotate(90deg);
}
</style>
