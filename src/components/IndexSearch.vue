<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout justify-center align-center row wrap>
      <v-flex xs10 offset-xs1 md8 offset-md1 xl6 offset-xl1 id="search-ctrl" class="pt-5">
        <img height="150px" id="title" src="../assets/logo.png">
        <h2 class="secondary--text mt-3 mb-3">
          <a href="">
          <v-tooltip bottom color="primary">
              <span slot="activator">Portal </span>   
            <v-icon slot="activator" small dark color="grey">help</v-icon>
            <span>Click to know more about Portol.</span>
          </v-tooltip>
          </a>
          <span>for all the images on the Internet</span>
        </h2>
        <vsearch></vsearch>
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

a {
  text-decoration: none;
}

</style>
