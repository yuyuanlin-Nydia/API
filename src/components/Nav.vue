<template>
  <div class="navs">
    <div class="myNav">
      <ul class="nav_left">
        <li>
          <a href="#" class="c_name"
            ><img src="../assets/images/logo.svg" alt=""
          /></a>
        </li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Resources</a></li>
      </ul>
      <ul class="nav_right">
        <li class="mark" v-if="!user">
          <router-link class="link" :to="{ name: 'LogIn' }"
            >Log in/Register</router-link
          >
        </li>
        <li v-if="user">Hi!{{ user }}</li>
        <li v-if="user" @click="logOut" style="cursor: pointer">Log out</li>
      </ul>
    </div>
    <div class="mobile_nav">
      <ul>
        <li>
          <a href="#" class="c_name"
            ><img src="../assets/images/logo.svg" alt=""
          /></a>
        </li>
        <li style="cursor: pointer" @click="toggleMobileNav">
          MENU
          <ul class="child_nav" v-if="mobileNav">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li>
              <router-link class="link" :to="{ name: 'LogIn' }"
                >Log in/Register</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      mobileNav: null,
    };
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    logOut() {
      console.log(this.$store.state.plat)
      if (this.$store.state.plat == "FB") {
        window.FB.logout(function (response) {
          console.log(response);
          location.reload();
        });
      } else if (this.$store.state.plat == "Google") {
        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut();
        console.log("Google signout!");
        location.reload();
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.profileName;
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/style/main.scss";
div.navs {
  margin-top: 20px;
  .myNav {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    @media (max-width: 950px) {
      display: none;
    }
    a.c_name {
      color: black;
      font-weight: 700;
      margin-left: 0px;
    }

    li {
      display: inline-block;
      a {
        margin: 20px;
        color: $color3;
      }
    }
    ul.nav_right {
      li {
        margin-right: 20px;
      }
    }
    .mark {
      background-color: $color2;
      padding: 8px;
      border-radius: 30px;
      a {
        color: white;
      }
    }
  }
  .mobile_nav {
    @media (min-width: 950px) {
      display: none;
    }
    @media (max-width: 950px) {
      width: 80%;
      margin: 0 auto;
    }
    @media (max-width: 500px) {
      padding: 0 20px;
    }
    > ul {
      display: flex;
      justify-content: space-between;
      .child_nav {
        background-color: $color5;
        padding: 30px 10px;
        border-radius: 15px;
        width: 90%;
        position: absolute;
        right: 20px;
        top: 60px;
        .btn_blue {
          width: 100%;
        }
        li {
          padding: 20px 0;
          text-align: center;
          a {
            color: white;
            font-weight: 700;
            font-size: 16px;
          }
        }
        li:nth-child(3) {
          border-bottom: 1px solid lightgray;
        }
      }
    }
  }
}
</style>