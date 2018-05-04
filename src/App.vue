<template>
<div id="app">
  <div id="header">
    <img id="title" src="./assets/logo.png" width="200">
  </div>
  <div id="body">
    
    <router-view/>
  </div>
  <div id="footer">
    <div id="footer1">
      
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a
            href="https://vuejs.org"
            target="_blank"
            >
            Core Docs
          </a>
        </li>
        <li>
          <a
            href="https://forum.vuejs.org"
            target="_blank"
            >
            Forum
          </a>
        </li>
        <li>
          <a
            href="https://chat.vuejs.org"
            target="_blank"
            >
            Community Chat
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/vuejs"
            target="_blank"
            >
            Twitter
          </a>
        </li>
        <br>
        <li>
          <a
            href="http://vuejs-templates.github.io/webpack/"
            target="_blank"
            >
            Docs for This Template
          </a>
        </li>
      </ul>
    </div>
    <div id="footer2">
      
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a
            href="http://router.vuejs.org/"
            target="_blank"
            >
            vue-router
          </a>
        </li>
        <li>
          <a
            href="http://vuex.vuejs.org/"
            target="_blank"
            >
            vuex
          </a>
        </li>
        <li>
          <a
            href="http://vue-loader.vuejs.org/"
            target="_blank"
            >
            vue-loader
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/awesome-vue"
            target="_blank"
            >
            awesome-vue
          </a>
        </li>
      </ul>
    </div>
    
  </div>
</div>
</template>
<script>
export default {
name: 'App'
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
justify-content:center;
text-align: center;
}
#app #title {
  margin-top: 60px;
}
#body {
display: flex;
flex: 6;
justify-content: center;
}
#header{
flex: 1;
}
#footer {
flex: 0.5;
display: flex;
flex-direction: row;
justify-content: center; 
}
/*#footer1 {
flex:1;
}
#footer2{
flex:1;
}*/
h1, h2 {
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