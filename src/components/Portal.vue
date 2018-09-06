<template>
  <v-container class="portal" fluid fill-height>
    <v-layout justify-center align-center column wrap>
      <!-- <v-flex xs10  md8  xl6 id="search-ctrl" class="pt-5"> -->
      <!--     <h1>{{ msg }}</h1>
  </v-flex>

       <v-spacer></v-spacer>
 -->
      <img height="150px" id="title" :src="src" nop_tag>
      <h3>{{ src }}</h3>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'Portal',
  data() {
    return {
      msg: 'This is portal home page',
      src: 'unknown.png'
    }
  },
  created() {
    console.log(this.$route);
    var media = this.$route.query.media;
    console.log(media);
    if(media) {

      this.src = window.atob(media);
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.portal {}

</style>
