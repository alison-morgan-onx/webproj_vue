<template>
  <div class="home">
    <Banner msg="Dad Jokes R Us" />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";

export default {
  name: "home",
  components: {
    Banner
  }
};
</script>
