<template>
  <div class="container">
    <Nav v-if="!navigation" />
    <router-view />
    <Footer v-if="!navigation" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import "../src/assets/application";

export default {
  name: "App",
  data() {
    return {
      navigation: null,
    };
  },
  components: {
    Nav,
    Footer,
  },
  methods: {
    // login page without nab
    checkRoute() {
      if (this.$route.name === "LogIn") {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
    getProfile() {
      let vm = this;
      window.FB.api(
        "/me",
        {
          fields: "id,name,email,picture",
        },
        function (response) {
          vm.$store.commit("setProfileInfo", response.name);
        }
      );
    },
   
  },
  created() {
    this.checkRoute();
  },
  mounted() {
    let vm=this;
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "202220545092331",
        cookie: true,
        xfbml: true,
        version: "v11.0",
      });
      window.FB.AppEvents.logPageView();
      // Get FB Login Status
      window.FB.getLoginStatus((response) => {
        // vm.statusChangeCallback(response)
        console.log("res", response); // 這裡可以得到 fb 回傳的結果
        if (response.status === "connected") {
          vm.getProfile();
        }
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/zh-TW/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },

  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang='scss' >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
