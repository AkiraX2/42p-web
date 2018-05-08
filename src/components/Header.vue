<template>
  <v-toolbar app color="primary" dark dense>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
      <span>42th</span>
      <img src="../assets/icon-white.png" width="18">
      <span>Portal</span>
    </v-toolbar-title>
    <v-menu :nudge-width="100">
      <v-toolbar-title slot="activator">
        <span>Home</span>
        <v-icon dark>arrow_drop_down</v-icon>
      </v-toolbar-title>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Download Plugin
        <v-icon dark right>fa fa-download</v-icon>
      </v-btn>
      <v-menu offset-y>
        <v-btn slot="activator" flat dark>
          EN
          <v-icon dark right>fa fa-globe</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="lang in langs" :key="lang.title" @click="">
            <v-list-tile-title>{{ lang.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-menu bottom left>
      <v-btn slot="activator" icon dark>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" @click="">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
export default {
  name: 'Header',
  data: () => ({
    items: [
      { title: 'Home Page' },
      { title: 'Join Us' },
      { title: 'Contact Us' },
      { title: 'About Us' }
    ],
    langs: [
      { title: "English" },
      { title: "简体中文" },
      { title: "繁體中文" },
      { title: "日本語" },
      { title: "Português" },
      { title: "Español" },
      { title: "Français" },
      { title: "한국어" },
      { title: "Deutsch" },
      { title: "Italiano" },
      { title: "More ..." }
    ]
  })
}

</script>
