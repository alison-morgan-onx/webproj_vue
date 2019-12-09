<template>
  <div class="jokePage">
    <JokeDisplay :jokeToDisplay="jokeToDisplay"/>
  </div>
</template>

<script>
import JokeDisplay from "@/components/JokeDisplay.vue";
export default {
  components: {JokeDisplay},
  data() {
      return{
          jokeToDisplay: this.$router.currentRoute.params.joke,
          snackbar: false
      }
  }
};
</script>