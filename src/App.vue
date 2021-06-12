<template>
  <div class="container">
    <Nav />
    <Loading  />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";
import Loading from "./components/Loading.vue";

export default {
  name: "App",
  data() {
    return {
      
    };
  },
  components: {
    Nav,
    Footer,
    Content,
    Loading,
  },
 
  methods: {},
};
</script>

<style lang='scss' >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
