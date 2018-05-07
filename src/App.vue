<template>
  <div id="app">
    <v-app>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex: 1;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

#app #title {
  margin-top: 60px;
}

#body {
  display: flex;
  flex: 9;
  justify-content: center;
}

#header {
  flex: 1;
}













/*#footer1 {
flex:1;
}
#footer2{
flex:1;
}*/

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
