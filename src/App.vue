<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense shaped>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item link to="#About">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="#About">
          <v-list-item-icon>
            <v-icon>mdi-download</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="#Experience">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Experience</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense shaped>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item link to="#About">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="#About">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Skill</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="#About">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Media</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Connor Boughton Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-tab href="#AboutMe">About Me</v-tab>
        <v-tab>Resume</v-tab>
        <v-tab>Media</v-tab>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <home-splash />
      <v-container fluid class="pa-0">
        <about-me />
        <experience />
      </v-container>
    </v-main>
    <v-footer app color="primary" dark>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import Experience from "./components/Experience.vue";
import HomeSplash from "./components/HomeSplash.vue";

export default {
  name: "App",

  components: { HomeSplash, AboutMe, Experience },

  data: () => ({
    drawer: false,
  }),
};
</script>

<style>
.section {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
