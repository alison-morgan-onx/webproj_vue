<template>
  <div class="banner">
    <v-toolbar>
      <v-toolbar-title>Dad Jokes</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <router-link to="/">Home</router-link> |
        <router-link to="/random">Random</router-link> |
        <router-link to="/search">Search</router-link>
        <router-view />
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
