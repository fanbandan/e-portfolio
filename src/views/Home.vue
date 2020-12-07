<template>
  <div>
    <home-splash />
    <v-container fluid class="pa-0">
      <about-me />
      <experience />
      <more />
    </v-container>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import Experience from "@/components/Experience.vue";
import HomeSplash from "@/components/HomeSplash.vue";
import More from "@/components/More.vue";

export default {
  name: "Home",
  components: { HomeSplash, AboutMe, Experience, More },
};
</script>
