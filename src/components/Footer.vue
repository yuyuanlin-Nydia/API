<template>
  <div class="footer_wrapper">
    <ul class="myFooter">
      <li><a href="#" class="c_name">Shortly</a></li>
      <ul class="central">
        <li>
          <a href="#">Features</a>
          <ul>
            <li><a href="#">Link shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </li>

        <li>
          <a href="#">Pricing</a>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Resources</a>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">OurTeam</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </li>
      </ul>
      <li>
        <ul class="icons">
          <li>
            <a href="#"><img src="../assets/images/icon-facebook.svg" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/images/icon-twitter.svg" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/images/icon-pinterest.svg" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/images/icon-instagram.svg" /></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/style/main.scss";
.footer_wrapper {
  position: relative;
  bottom: 0;
  background-color: black;

  .myFooter {
    padding: 30px 0px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
    @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
    }
    a {
      color: $color3;
    }
    li > li,
    > ul > li {
      display: inline-block;
    }
    .c_name {
      font-weight: 700;
      font-size: 30px;
      color: white;
    }
    .central {
      display: flex;
      @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
      }
      > li {
      margin: 0px 35px;

      > ul > li {
        margin: 15px 0px;
      }
      > a {
        font-weight: 500;
        color: white;
        font-size: 16px;
      }
    }
    }
    .icons {
      li {
        display: inline-block;
        margin: 10px;
      }
    }
  }
}
</style>