<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense shaped>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item link to="/#about">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="about">
          <v-list-item-icon>
            <v-icon>mdi-download</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/#experience">
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
        <v-tab to="/#about">About Me</v-tab>
        <v-tab to="/resume">Resume</v-tab>
        <v-tab to="/media">Media</v-tab>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app color="primary" dark absolute>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

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
