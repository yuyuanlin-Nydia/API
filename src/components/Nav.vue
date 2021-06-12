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
        <li><a href="#">Login</a></li>
        <li class="mark"><a href="#">Sign Up</a></li>
      </ul>
    </div>
    <div class="mobile_nav">
      <ul>
        <li>
          <a href="#" class="c_name"
            ><img src="../assets/images/logo.svg" alt=""
          /></a>
        </li>
        <li>
          MENU
          <ul class="child_nav" style="display:none">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Login</a></li>
            <li class="btn_blue"><a href="#">Sign Up</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>


<style lang="scss" scoped>
@import "../assets/style/main.scss";
div.navs{
  .myNav {
  width:80%;
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
      top:60px;
      .btn_blue {
        width: 100%;
      }
      li {
        padding: 20px 0;
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