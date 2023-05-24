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
            <a href="#" class="sub-item">
              <router-link :to="{ name: 'admin-challenge-list' }"
                ><i class="fa-solid fa-user"></i>챌린지 리스트</router-link
              >
            </a>
            <a href="#" class="sub-item">
              <router-link :to="{ name: 'admin-challenge-create' }"
                ><i class="fa-solid fa-user"></i>챌린지 생성</router-link
              >
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
            <a href="#" class="sub-item">
              <router-link :to="{ name: 'admin-board-category' }"
                ><i class="fa-solid fa-clipboard-list"></i>카테고리
                관리</router-link
              >
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
  },
};
</script>

<style scoped>
.side-bar {
  background: whitesmoke;
  backdrop-filter: blur(18px);
  width: 320px;
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
  font-size: 16px;
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

.side-bar .menu .item .sub-menu a {
  padding-left: 60px;
}

.rotate {
  transform: rotate(90deg);
}
</style>
