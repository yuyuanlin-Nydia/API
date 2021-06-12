<template>
  <div class="loading_bg" v-show="ifLoad">
    <div>
      <div class="loading"></div>
      <br />
      <p>It takes less than one minute. <br />Please wait patiently.</p>
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      ifLoad: null,
    };
  },
  created() {
    this.$bus.on("startCreate", () => {
      this.ifLoad = true;
    });
    this.$bus.on("endCreate", () => {
      this.ifLoad = false;
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.loading_bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  z-index: 101;
  div {
    .loading {
      height: 80px;
      width: 80px;
      border: 3px solid transparent;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      animation: myrotate infinite 1000ms ease;
      border-radius: 50%;
      margin: 0 auto;
      @keyframes myrotate {
        to {
          transform: rotateZ(360deg);
        }
      }
    }
    p {
      color: white;
      z-index: 200;
      font-size: 20px;
    }
  }
}
</style>