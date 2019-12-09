<template>
  <div class="jokeDisplay">
    <v-container grid-list-md text-xs-center>
      <v-snackbar
        v-model="snackbar"
        :top="true"
      >
        Joke Copied To Clipboard!
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <h1>Enjoy your random dad joke!</h1>
          <v-card>
            <h2 class="jokeToCopy">{{jokeToDisplay}} <v-icon @click="copyToClipboard()">mdi-clipboard</v-icon> </h2>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "JokeDisplay",
  props: ["jokeToDisplay"],
  data(){
      return{
          snackbar: false
      }
  },
methods:{
    copyToClipboard(){
      navigator.clipboard.writeText(this.jokeToDisplay).then(() => {
        this.snackbar = true
      }, () => {
        console.error("could not copy to clipboard")
      });
    }
  }
};
</script>