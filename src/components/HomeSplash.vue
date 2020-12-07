<template>
  <v-sheet
    class="hero bg-cover"
    elevation="20"
    :style="{
      backgroundImage: 'url(' + require('../assets/hero-bg-1.svg') + ')',
    }"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center font-weight-thin white--text" cols="12">
        <h1 class="font-weight-thin mb-4 excite">Connor Boughton</h1>
        <h4 class="font-weight-thin font-weight-thin">
          Passionate Mechatronics Engineer (TAG PHRASE HERE)
        </h4>
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

<style>
.bg-cover {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.excite {
  font-size: 6rem;
}
</style>
