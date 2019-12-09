<template>
  <div class="search">
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <v-card
                  primary-title 
                >
                <h1>Search For Dad Joke</h1>
                <Input
                  @updateSearch="setSearch"
                />
            </v-card>
            <v-card>
              <Table 
                v-if="items.length" 
                :jokes="items"
                @navigate="goToJokePage"
              />
              <v-btn text :disabled="page == 1" @click="prevPage()">Prev</v-btn>
              <v-btn text :disabled="page == isNextPage" @click="nextPage()">Next</v-btn>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from "@/components/Input.vue";
import Table from "@/components/Table.vue";

export default {
  name: "search",
  components: {
    Input,
    Table
  },
  data() {
      return {
          isNextPage: 1,
          items: [],
          page: 1,
          searchPhrase: ""
      }
  },
  watch: {
      searchPhrase() {
          this.getJokes()
      },
      page(){
        this.getJokes()
      }
  },
  methods: {
      setSearch(query){
          this.searchPhrase = query
      },
      getJokes(){
        fetch(`https://icanhazdadjoke.com/search?term=${this.searchPhrase}&page=${this.page}&limit=5`, {
          method: "GET",
          headers : { 
              'Accept': 'application/json'
          }
        })
        .then(
          response => {
            response.json()
              .then((json) => {
                this.items = json.results
                this.isNextPage = json.next_page
              })
        })
        .catch(
          err => {
            console.error('could not return jokes', err)
          }
        )
    },
    goToJokePage(joke){
      this.$router.push({ name:"jokepage", params: { joke: joke } })
    },
    nextPage(){
      this.page ++
    },
    prevPage(){
      if (this.page != 1) this.page --
    }
  }
};
</script>
<style lang="scss">
.footer {
  height: 50px;
  margin-top: -50px;
}
</style>