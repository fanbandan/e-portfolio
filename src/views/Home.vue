<template>
  <div>
    <home-splash />
    <v-container fluid class="pa-0">
      <about-me />
      <experience />
    </v-container>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import Experience from "@/components/Experience.vue";
import HomeSplash from "@/components/HomeSplash.vue";

export default {
  name: "Home",
  components: { HomeSplash, AboutMe, Experience },
};
</script>
