<template>
  <div>
    <button @click="kakaoLogin">카카오로 로그인</button>
    <button>네이버로 로그인</button>
  </div>
</template>

<script>
export default {
  name: "social-login",
  methods: {
    kakaoLogin() {},
    // async kakaoLogin() {
    //   const bu = "https://kauth.kakao.com/oauth/authorize";
    //   const cf = {
    //     client_id: process.env.VUE_APP_KAKAO_REST_API_KEY,
    //     redirect_uri: process.env.VUE_APP_KAKAO_REDIRECT_URI,
    //     response_type: "code",
    //     scope: "profile_nickname,account_email,profile_image",
    //   };
    //   const pr = new URLSearchParams(cf).toString();
    //   const final_url = `${bu}?${pr}`;
    //   fetch(final_url, ()=>{
    //   const { code } = res.query;
    //   const base_url = "https://kauth.kakao.com/oauth/token";
    //   const config = {
    //     grant_type: "authorization_code",
    //     client_id: process.env.VUE_APP_KAKAO_REST_API_KEY,
    //     redirect_uri: process.env.VUE_APP_KAKAO_REDIRECT_URI,
    //     code,
    //   };
    //   const params = new URLSearchParams(config).toString();
    //   const response = await (
    //     await fetch(`${base_url}?${params}`, {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //       },
    //     })
    //   ).json();
    //   if (!("access_token" in response)) {
    //     alert("access-token없음");
    //     this.$store.push({name:'home-view'});
    //   }
    //   const { access_token } = response;
    //   const response2 = await (
    //     await fetch("https://kapi.kakao.com/v2/user/me", {
    //       headers: {
    //         Authorization: `Bearer ${access_token}`,
    //       },
    //     })
    //   ).json();
    //   if (!("email" in response2.kakao_account)) {
    //     return res.redirect("/");
    //   }
    //   const { kakao_account } = response2;
    //   console.log(kakao_account);
    // let user = await User.findOne({ email: kakao_account.email });
    // if (user) {
    //   if (user.socialLogin === "KAKAO") {
    //     req.session.loggedIn = true;
    //     req.session.loggedInUser = user;
    //     return res.redirect("/");
    //   }
    //   return res.redirect("/login");
    // }
    // user = await User.create({
    //   username: `kakao-${response2.id}`,
    //   name: kakao_account.profile.nickname,
    //   email: kakao_account.email,
    //   socialLogin: "KAKAO",
    //   channel: `kakao-${response2.id}`,
    //   avatarUrl: kakao_account.profile.profile_image_url
    //     ? kakao_account.profile.profile_image_url
    //     : "",
    // });
    // req.session.loggedIn = true;
    // req.session.loggedInUser = user;
    // return res.redirect("/");
    // })
    // },
  },
};
</script>

<style></style>
