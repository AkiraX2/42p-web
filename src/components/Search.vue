<template>
  <div class="input-group input-group--append-icon input-group--placeholder theme--light input-group--solo input-group--text-field input-group--single-line primary--text" :class="focus? 'elevation-4':'elevation-1'">
    <div class="input-group__input">
      <input id="search" tabindex="0" placeholder="Search" type="text" value="" class="ds-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="" @blur="blur()" @focus="enter()" autofocus>
      <v-tooltip bottom color="primary">
        <v-menu slot="activator" :close-on-content-click="false" v-model="menu" offset-x>
          <v-btn slot="activator" icon class="inner-btn">
            <v-icon color="primary">image</v-icon>
          </v-btn>
          <v-card>
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="/static/doc-images/john.jpg" alt="John">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                  <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch v-model="message" color="purple"></v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Enable messages</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch v-model="hints" color="purple"></v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Enable hints</v-list-tile-title>
              </v-list-tile>
            </v-list>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="menu = false">Cancel</v-btn>
              <v-btn color="primary" flat @click="menu = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
        <span>Search by image</span>
      </v-tooltip>
      <v-icon class="ml-2" color="secondary">search</v-icon>
    </div>
    <div class="input-group__details">
      <!---->
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data: () => ({
    focus: true,
    fav: true,
    menu: false,
    message: false,
    hints: true
  }),
  methods: {
    blur() { this.focus = false },
    enter() { this.focus = true },
    esc() { this.focus = false }
  }
}

</script>
<style scoped type="text/css">
.inner-btn {
  margin: 0;
}

</style>
