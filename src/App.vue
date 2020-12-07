<template>
  <v-app>
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
        <v-list-item link to="/resume">
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
        <v-list-item link to="/media">
          <v-list-item-icon>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Media</v-list-item-title>
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
        <v-list-item link to="/project#university">
          <v-list-item-icon>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/project#research">
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
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" class="white--text text-decoration-none">
          Connor Boughton Portfolio
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat text to="/#about" class="mx-1">About Me</v-btn>
      <v-btn flat text to="/resume" class="mx-1">Resume</v-btn>
      <div class="text-center">
        <v-btn
          icon
          link
          floating
          href="https://au.linkedin.com/in/connor-boughton"
          large
          class="mx-1"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          icon
          link
          floating
          href="https://github.com/fanbandan/"
          large
          class="mx-1"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn
          icon
          link
          floating
          href="https://www.youtube.com/watch?v=I16_Z1yCCcE&list=PLQwrq-hIMmG_qPvNm-6vhzsoG92JLf17l"
          large
          class="mx-1"
        >
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <more />
    </v-main>
    <v-footer app color="primary" dark absolute>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import More from "@/components/More.vue";
export default {
  name: "App",

  components: { More },

  data: () => ({
    drawer: false,
  }),
};
</script>

<style>
.section {
  max-width: 1400px;
  margin: 0 auto;
}
.section-container {
  position: relative;
}
</style>
