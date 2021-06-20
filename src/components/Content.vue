<template>
  <div class="top_box">
    <div>
      <h1>More than just shorter links</h1>
      <h3>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </h3>
      <button class="btn_blue">Get started</button>
    </div>
    <div class="bg_top"></div>
  </div>
  <div class="url_sec_box">
    <div class="url_sec">
      <input
        type="text"
        placeholder="shorten a link here..."
        v-model="user_link"
      />
      <p></p>
      <button class="btn_blue_sq" @click="createLink">{{ btn_text }}</button>
    </div>
    <div class="url_created" v-show="shorten_link">
      <div>
        <span
          ><a :href="user_link" target="_blank">{{ user_link }}</a></span
        >
        <div>
          <span
            ><a :href="shorten_link" target="_blank">{{
              shorten_link
            }}</a></span
          >
          <button class="btn_blue_sq">COPY</button>
        </div>
      </div>
    </div>
  </div>
  <div class="list_sec">
    <div>
      <h1>Advanced Statistics</h1>
      <h3>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </h3>
      <div class="line"></div>
      <div class="lists_box">
        <div>
          <div class="img_box">
            <img src="../assets/images/icon-brand-recognition.svg" alt="" />
          </div>
          <br />
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing.Brand links help instil confidence in your content.
          </p>
        </div>
        <div>
          <div class="img_box">
            <img src="../assets/images/icon-detailed-records.svg" alt="" />
          </div>
          <br />
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div>
          <div class="img_box">
            <img src="../assets/images/icon-fully-customizable.svg" alt="" />
          </div>
          <br />
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="btm_sec">
    <h1>Boost your links today</h1>
    <button class="btn_blue">Get Started</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Content",
  data() {
    return {
      user_link: "",
      info: null,
      btn_text: "",
      shorten_link: "",
      ifLoading: "",
    };
  },

  mounted() {
    this.btn_text = "Shorten it!";
  },
  methods: {
    createLink() {
      this.$bus.emit("startCreate");
      this.btn_text = "generating...";
      var url = this.user_link;
      axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`).then((res) => {
        this.shorten_link = res.data.result.full_short_link;
        this.btn_text = "Shorten it!";
        this.$bus.emit("endCreate");
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/main.scss";
.top_box {
  width: 80%;
  margin: 50px auto;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    padding: 0 20px;
    display: flex;
    flex-direction: column-reverse;
  }
  div:nth-child(1) {
    width: 50%;
    @media (max-width: 1100px) {
      width: 40%;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  div {
    @media (max-width: 700px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    h1 {
      font-weight: 700;
      margin-bottom: 30px;
      font-size: 70px;
      @media (max-width: 1100px) {
        font-size: 40px;
      }
      @media (max-width: 700px) {
        font-size: 40px;
        text-align: center;
        margin-bottom: 15px;
      }
    }
    h3 {
      color: $color3;
      font-size: 20px;
      line-height: 40px;
      margin-bottom: 30px;
      @media (max-width: 1100px) {
        font-size: 16px;
        line-height: 32px;
      }
      @media (max-width: 700px) {
        font-size: 16px;
        text-align: center;
        line-height: 28px;
        margin-bottom: 15px;
      }
    }
    .btn_blue {
      font-weight: 500;
      @media (max-width: 700px) {
        width: 200px;
        margin: 0 auto;
      }
    }
  }
  .bg_top {
    width: 50%;
    height: 500px;
    background-image: url("../assets/images/illustration-working.svg");
    @media (max-width: 1100px) {
      width: 60%;
    }
    @media (max-width: 700px) {
      width: 100%;
      height: 280px;
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
}
.url_sec_box {
  width: 80%;
  margin: 0 auto;
  @media (max-width: 600px) {
    padding: 0 20px;
  }
  .url_sec {
    background-image: url("../assets/images/bg-shorten-desktop.svg");
    background-repeat: repeat;
    height: 100px;
    margin-bottom: 20px;
    background-color: $color5;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    @media (max-width: 600px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 150px;
    }
    input {
      box-sizing: border-box;
      width: 75%;
      height: 50px;
      margin-right: 20px;
      border-radius: 5px;
      padding: 0 10px;
      @media (max-width: 600px) {
        width: 90%;
        margin-bottom: 15px;
        margin-right: 0;
      }
    }
    button {
      @media (max-width: 600px) {
        width: 90%;
      }
    }
  }
  .url_created {
    > div {
      width: 100%;
      height: 50px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 0px 10px;
      .btn_blue_sq {
        margin-left: 15px;
      }
    }
  }
}
.list_sec {
  position: relative;
  z-index: -5;
  margin-top: -80px;
  padding-top: 120px;
  background-color: $color4;
  display: grid;
  grid-template-areas:
    "."
    "list_center"
    ".";

  div {
    grid-area: list_center;
    position: relative;
    z-index: 2;

    h1 {
      text-align: center;
      font-weight: 700;
    }
    > h3 {
      text-align: center;
      max-width: 400px;
      color: $color3;
      margin: 0 auto;
      line-height: 20px;
      margin-top: 15px;
      margin-bottom: 20px;
    }
    > div.line {
      margin: 0 auto;
      max-width: 60%;
      height: 5px;
      background-color: $color2;
      position: relative;
      top: 150px;
      z-index: 1;
      @media (max-width: 600px) {
        width: 5px;
        height: 500px;
        position: absolute;
        left: 50%;
        z-index: 1;
      }
    }
    > div.lists_box {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      padding-bottom: 50px;
      width: 80%;
      margin: 0 auto;
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        margin: 0 auto;
        margin-top: 40px;
        box-sizing: content-box;
      }
      > div:nth-child(2) {
        margin-top: 40px;
        @media (max-width: 600px) {
          margin-top: 0;
        }
      }
      > div:nth-child(3) {
        margin-top: 80px;
        @media (max-width: 600px) {
          margin-top: 0;
        }
      }
      > div {
        background-color: white;
        width: 27%;
        height: 100%;
        padding: 60px 20px 30px;
        line-height: 20px;
        border-radius: 3px;
        margin-bottom: 60px;

        @media (max-width: 600px) {
          min-width: 100%;
          padding: 60px 20px 0px;
          height: 170px;
          padding: 60px 30px 0px;
          box-sizing: border-box;
        }
        h2 {
          text-align: left;
          font-weight: 700;
          text-align: center;
        }
        p {
          margin-top: 10px;
          color: $color3;
          text-align: left;
          text-align: center;
          @media (max-width: 600px) {
            font-size: 16px;
          }
        }
        .img_box {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: $color1;
          margin-top: -90px;
          display: flex;
          align-items: center;
          justify-content: center;
          @media (max-width: 600px) {
            margin: 0 auto;
            margin-top: -90px;
          }
        }
      }
    }
  }
}
.btm_sec {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 150px;
  color: white;
  font-weight: 700;
  background-image: url("../assets/images/bg-boost-desktop.svg");
  height: 100px;
  background-color: $color5;
  h1 {
    margin-bottom: 25px;
  }
  button {
    padding: 8px 20px;
    font-size: 16px;
  }
}
</style>