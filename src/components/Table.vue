<template>
    <v-data-table
      :items="jokes"
      :items-per-page="5"
      :headers="headers"
      @click:row="navigateToJoke($event)"
      hide-default-headers
      hide-default-footer
      class="elevation-1"
    ></v-data-table>
</template>
<script>
export default {
  name: "Table",
  props: [
    "jokes"
  ],
  data(){
    return{
      headers: [
        {
          value: "joke",
          sortable: true,
        },
      ],
    }
  },
  methods:{
    navigateToJoke(event){
      this.$emit('navigate', event.joke)
    }
  }
};
</script>