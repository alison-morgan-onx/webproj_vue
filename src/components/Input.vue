<template>
  <v-text-field
    clearable
    class="textField"
    v-model="query"
>
  </v-text-field>
</template>
<script>
export default {
  name: "Input",
  data() {
    return{
      query: ""
    }
},
watch: {
    query() {
      this.$emit('updateSearch', this.query)
    }
  }
}
</script>

<style lang="scss">
.v-text-field .v-input__slot {
  width: 90%;
  margin: auto
}
</style>