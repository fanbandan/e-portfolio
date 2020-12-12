<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="toggle"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" class="white--text text-decoration-none">
          Connor Boughton Portfolio
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="!$vuetify.breakpoint.mobile">
        <social-links />
      </template>
      <template v-slot:extension v-if="$vuetify.breakpoint.mobile">
        <social-links />
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense shaped>
        <v-subheader>Overview</v-subheader>
        <v-list-item link to="/#about">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/#experience">
          <v-list-item-icon>
            <v-icon>mdi-briefcase-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Experience</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :href="`${publicPath}Resume.pdf`" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-download</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense shaped>
        <v-subheader>More Details</v-subheader>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-account-arrow-right</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/skills">
          <v-list-item-icon>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/media">
          <v-list-item-icon>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Media</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/community#leadership">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Leadership </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/community#community">
          <v-list-item-icon>
            <v-icon>mdi-city</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Community </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/projects#university">
          <v-list-item-icon>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/projects#research">
          <v-list-item-icon>
            <v-icon>mdi-flask</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Research</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-icon>
            <v-icon>mdi-email-send</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SocialLinks from "./SocialLinks.vue";
export default {
  components: { SocialLinks },
  data: () => ({
    publicPath: process.env.BASE_URL,
    drawer: false,
  }),
  methods: {
    toggle() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style></style>
