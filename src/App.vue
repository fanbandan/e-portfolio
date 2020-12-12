<template>
  <v-app>
    <top-side-bar />
    <v-main>
      <router-view style="min-height: 75vh"></router-view>
      <more />
    </v-main>
    <v-footer app color="primary" dark absolute>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import More from "@/components/More.vue";
import TopSideBar from "@/components/Navigation/TopSideBar.vue";
export default {
  name: "App",

  components: { TopSideBar, More },

  data: () => ({
    drawer: false,
  }),
  methods: {
    toggle() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style>
.section {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
}
.section-container {
  position: relative;
}
</style>
