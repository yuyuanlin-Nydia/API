<template>
  <div>
    <Loading />
    <Content />
  </div>
</template>

<script>
import Content from "../components/Content.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Content,
    Loading,
  },
  

  methods: {},
};
</script>

<style>
</style>