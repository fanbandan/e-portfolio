<template>
  <v-sheet flat color="#C5CAE9" class="px-4" id="about">
    <v-row class="section" justify="space-around">
      <v-col md="3">
        <v-card elevation="2">
          <v-img :src="require('../assets/profile.jpg')"> </v-img>
        </v-card>
      </v-col>
      <v-col justify-center align-self="center" md="6">
        <v-card flat class="transparent indigo--text">
          <v-card-title class="headline"> About Me </v-card-title>
          <v-card-text class="indigo--text">
            <p>
              Hi I'm Connor, a fourth year Mechatronics Engineering Student.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style></style>
