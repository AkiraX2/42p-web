<template>
  <v-container fluid fill-height text-xs-center grid-list-xl>
    <v-layout justify-center align-center row wrap>
      <v-flex id="image-search-ctrl" v-if="!textSearch" xs12>
        <v-card elevation-3>
          <v-toolbar color="primary" flat dark tabs>
            <v-toolbar-title>Open portal by dragging an image here or ...</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="searchSwitch()" transition="scale-transition">
              <v-icon>close</v-icon>
            </v-btn>
            <v-tabs slot="extension" v-model="tabs" slider-color="white" color="transparent" align-with-title>
              <v-tab>
                Paste image URL
              </v-tab>
              <v-tab>
                Upload an image
              </v-tab>
            </v-tabs>
          </v-toolbar>
          <v-tabs-items v-model="tabs">
            <v-tab-item v-for="n in 3" :key="n">
              <v-card flat>
                <v-container grid-list-md>
                  <v-layout row wrap>
                    <v-flex xs12 sm8>
                      <v-text-field solo placeholder="You can Paste URL here to search" flat clearable="true"></v-text-field>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex>
                      <v-btn color="primary" flat dark>Open Portal By Image</v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-flex>
      <v-flex id="text-search-ctrl" v-if="textSearch" xs12 transition="scale-transition" class="py-3">
        <div class="input-group input-group--append-icon  input-group--prepend-icon input-group--placeholder theme--light input-group--solo input-group--text-field input-group--single-line primary--text" :class="focus? 'elevation-4':'elevation-1'">
          <div class="input-group__input">
            <v-icon class="input-group__prepend-icon" color="secondary">search</v-icon>
            <input id="search" tabindex="0" placeholder="Search" type="text" value="" class="ds-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="" @blur="blur()" @focus="enter()" autofocus>
            <v-btn slot="activator" icon class="inner-btn" @click="searchSwitch()">
              <v-tooltip bottom color="primary">
                <v-icon slot="activator" class="input-group__append-icon" color="primary">image</v-icon>
                <span>Search by image</span>
              </v-tooltip>
            </v-btn>
          </div>
          <div class="input-group__details">
          </div>
        </div>
        <v-flex xs12 class="py-5">
          <v-btn large depressed class="secondary--text">Start Search</v-btn>
          <v-btn large depressed class="secondary--text">Popular Posts</v-btn>
        </v-flex>
      </v-flex>
      <!-- <v-text-field dark prepend-icon="search" append-icon="image" label="Search" class="mx-3 primary" solo-inverted></v-text-field> -->
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "search",
  data: () => ({
    focus: true,
    fav: true,
    menu: false,
    message: false,
    hints: true,
    text: "this is for test.",
    textSearch: true,
    tabs: null,
  }),
  methods: {
    blur() { this.focus = false },
    enter() { this.focus = true },
    esc() { this.focus = false },
    searchSwitch() { this.textSearch = !this.textSearch },
  }
}

</script>
<style scoped type="text/css">
.inner-btn {
  margin: 0;
}

</style>
