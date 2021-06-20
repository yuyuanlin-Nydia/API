<template>
  <div class="wrapper">
    <div class="box">
      <p>{{ currentUser }}</p>
      <div class="left_sec">
        <img src="../assets/images/illustration-working.svg" alt="" />
      </div>
      <div class="right_sec">
        <h2>
          <span
            v-for="tab in tabs"
            :key="tab"
            :class="[{ active: currentTab === tab }]"
            @click="currentTab = tab"
            >{{ tab }}</span
          >
        </h2>

        <div v-show="currentTab === 'Login'">
          <div>
            <p>ACCOUNT</p>
            <input type="text" placeholder="Enter your account" />
          </div>
          <div>
            <p>PASSWORD</p>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div class="buttons">
            <button class="btn_blue">Log in</button>
            <button class="btn_blue" @click="loginFB">
              Log in with Facebook
            </button>
            <button class="btn_blue" @click="loginGoogle">
              Log in with Google
            </button>
           
          </div>
          <router-link class="link" :to="{ name: 'Home' }"
            ><p>Back to Index</p></router-link
          >
        </div>

        <div v-show="currentTab === 'Register'">
          <div>
            <p>FULL NAME</p>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div>
            <p>Account</p>
            <input type="text" placeholder="Enter your account" />
          </div>
          <div>
            <p>PASSWORD</p>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div>
            <p>Email</p>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div class="buttons">
            <button class="btn_blue">Log in</button>
            <button class="btn_blue" @click="login">
              Sign up with Facebook
            </button>
          </div>
          <router-link class="link" :to="{ name: 'Home' }"
            ><p>Back to Index</p></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      currentTab: "Login",
      tabs: ["Login", "Register"],
    };
  },

  methods: {
    loginGoogle() {
      // API call for Google login
      let vm=this;
      window.gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(
          function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log("Full Name: " + profile.getName());
            vm.$store.commit("setProfileInfo", profile.getName());
            vm.$store.commit("setPlat", "Google");
            vm.$router.push({ name: "Home" });
          },
          function (error) {
            // Error occurred
            console.log(error);
          }
        );
    },
    loginFB() {
      let vm = this;
      window.FB.login(
        function (response) {
          console.log("res", response);
          if (response.status === "connected") {
            vm.getProfile();
            vm.$router.push({ name: "Home" });
          }
        },
        {
          scope: "email, public_profile",
          return_scopes: true,
        }
      );
    },
    //get FB profile
    getProfile() {
      let vm = this;
      window.FB.api(
        "/me",
        {
          fields: "id,name,email,picture",
        },
        function (response) {
          vm.$store.commit("setProfileInfo", response.name);
          vm.$store.commit("setPlat", "FB");
        }
      );
    },
    logoutFB() {
      window.FB.logout(function (response) {
        console.log("res", response);
      });
    },
  },
  mounted() {
    window.gapi.load("auth2", function () {
      window.gapi.auth2.init({
        client_id:
          "508912060316-3codt6ul3fnne8hi7shfsttdfkl9qs8a.apps.googleusercontent.com",
      });
      console.log("aaa");
      window.gapi.load("signin2", () => {});
    });
  },
  computed: {
    currentTabComponent() {
      return `tab-${this.currentTab.toLowerCase}`;
    },
    currentUser() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/main.scss";
div.wrapper {
  width: 100%;
  height: 100vh;
  background-color: $color5;
  display: flex;
  align-items: center;
  .box {
    width: 60%;

    margin: 0 auto;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 5px 5px 10px rgb(173, 173, 173);
    .left_sec {
      width: 50%;
      height: 70%;
      padding: 30px;
      display: flex;
      align-items: stretch;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .right_sec {
      background-color: cadetblue;
      width: 50%;
      height: 70%;
      box-sizing: border-box;
      padding: 70px 70px;
      .link {
        text-decoration: underline;
        color: white;
        text-align: right;
      }
      h2 {
        span {
          padding: 0 5px 3px 5px;
          margin-right: 10%;
          cursor: pointer;
        }
        .active {
          border-bottom: 1px solid burlywood;
        }
      }
      > div {
        background-color: cadetblue;
        height: 350px;
        margin-top: 40px;
        > div {
          margin: 20px 0px;
          input {
            width: 100%;
            padding-bottom: 2px;
            height: 30px;
            background-color: transparent;
            border-bottom: 1px solid lightgray;
            &:focus {
              border-bottom: 1px solid $color1;
            }
          }
        }
        .buttons {
          display: flex;
          flex-direction: column;
          button {
            margin: 5px 0;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>