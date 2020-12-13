<template>
  <v-sheet
    class="hero bg-cover section-container"
    elevation="6"
    :style="{
      backgroundImage: 'url(' + require('../assets/hero-bg-1.svg') + ')',
      'z-index': '4',
    }"
  >
    <!-- Image from https://bgjar.com/polygon-luminary.html -->
    <v-row align="center" justify="center">
      <v-col class="text-center font-weight-thin white--text" cols="12">
        <div class="pa-2">
          <h1 class="font-weight-thin mb-4 excite">Connor Boughton</h1>
          <h4 class="font-weight-thin font-weight-thin">
            Passionate Mechatronics Engineer | Leader | Lifelong Learner
          </h4>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
  <!-- <v-parallax dark :src="require('../assets/hero-fg-1.svg')" height="600">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-col>
      </v-row>
    </v-parallax> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/settings/_variables";

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .excite {
    font-size: 6rem;
    font-size: 6vw;
  }
}
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .excite {
    font-size: 2rem;
    font-size: 10vw;
  }
}
.bg-cover {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
