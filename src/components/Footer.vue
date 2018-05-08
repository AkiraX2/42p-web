<template>
  <v-footer height="auto">
    <v-card flat tile class="flex">
      <!-- <v-card-title class="teal white--text">
  <strong class="subheading">Get connected with us on social networks!</strong>
  <v-spacer></v-spacer>
  <v-btn v-for="icon in icons" :key="icon" icon dark class="mx-3">
    <v-icon size="24px"> {{ icon }}
    </v-icon>
  </v-btn>
</v-card-title>
 -->
      <v-layout row wrap justify-center>
        <v-btn v-for="link in langs" :key="link" color="grey lighten-1" class="link" flat> {{ link }}
        </v-btn>
      </v-layout>
      <v-card-actions class="white justify-center secondary--text">
        <strong>42Port.com &copy; 2018
        </strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: ['fa fab fa-facebook', 'fa fab fa-twitter', 'fa fab fa-google-plus', 'fa fab fa-linkedin', 'fa fab fa-instagram'],
    langs: ['English (US)', '中文(简体)', '日本語', 'Português (Brasil)', 'Tiếng Việt', 'Español', 'Bahasa Indonesia', '한국어', 'Français (France)', 'Deutsch', 'Italiano', 'More ...'],
    rows: [{
        title: 'Company Name',
        children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
      },
      {
        title: 'Products',
        children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      }
    ]
  })
}

</script>
<style scoped>
.link {
  font-weight: 300;
}

</style>
