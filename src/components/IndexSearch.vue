<template>
  <v-container fluid fill-height text-xs-center>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md6 xl4 id="search-ctrl" class="pb-5">
        <v-flex>
          <img height="150px" id="title" src="../assets/logo.png">
        </v-flex>
        <v-flex class="secondary--text mt-3 mb-3">
          <h2> {{ msg }}
          </h2>
        </v-flex>
        <v-flex class="mb-5">
          <vsearch></vsearch>
        </v-flex>
        <v-flex class="pb-5">
          <v-btn large depressed>Start Search</v-btn>
          <v-btn large depressed>Popular Posts</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import vsearch from '@/components/Search'

export default {
  name: 'IndexSearch',
  data() {
    return {
      msg: 'Portal for all the images on the Internet'
    }
  },
  components: {
    vsearch
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

</style>
