<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item
        v-for="item in navigation"
        :key="item.title"
        link
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNav",

  data: () => ({
    drawer: false,
    navigation: [
      { title: "Dashboard", icon: "mdi-view-dashboard", link: "foo" },
      { title: "Photos", icon: "mdi-image", link: "bar" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
};
</script>

<style></style>
