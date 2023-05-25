<template>
  <div>
    <nav>
      <div class="navnav">
        <router-link
          :to="{ name: 'home-view' }"
          id="ssafynergy_logo"
          class="mouse_pointer"
        >
          <img src="@/assets/img/ssafynergy_logo.png" />
        </router-link>
        <router-link
          :to="{ name: 'admin-main' }"
          style="font: white; text-decoration: none"
          >관리자 메인</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
#ssafynergy_logo {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
#ssafynergy_logo > img {
  height: 40px;
}
nav {
  height: 2rem;
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: 10;
  background-color: #1f366b;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
}
.navnav {
  font-size: 20px;
  display: flex;
}
</style>
