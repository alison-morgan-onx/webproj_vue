<template>
  <div class="random">
    <JokeDisplay :jokeToDisplay="jokeToDisplay"/>
  </div>
</template>

<script>
import requestMixins from "@/mixins/getJokes.js";
import JokeDisplay from "@/components/JokeDisplay.vue";

export default {
  components: {JokeDisplay},
  name: "search",
  mixins: [requestMixins],
  data() {
      return {
          jokeToDisplay: "",
          snackbar: false
      }
  },
  methods: {
      getJokes(){
        fetch(`https://icanhazdadjoke.com/`, {
          method: "GET",
          headers : { 
              'Accept': 'application/json'
          }
        })
        .then(
          response => {
            response.json()
              .then((json) => {
                this.jokeToDisplay = json.joke
              })
        })
        .catch(
          err => {
            console.error('could not return jokes', err)
          }
        )
    },
    copyToClipboard(){
      navigator.clipboard.writeText(this.jokeToDisplay).then(() => {
        this.snackbar = true
      },() => {
        console.error("could not copy to clipboard")
      });
    }
  },
  created(){
    this.getJokes()
  }
};
</script>
<style lang="scss">
.footer {
  height: 50px;
  margin-top: -50px;
}
</style>