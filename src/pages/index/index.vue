<template>
  <div id="app">
    <v-app id="inspire">
      <vheader />
      <v-content>
        <router-view/>
      </v-content>
      <vfooter />
    </v-app>
  </div>
</template>
<script>
import vfooter from '@/components/Footer'
import vheader from '@/components/Header'
export default {
  name: 'App',
  components: {
    vfooter,
    vheader
  },

  data() {
    return {
      msg: 'Welcome to 42port.com'
    }
  }
}

</script>
<style>


</style>
