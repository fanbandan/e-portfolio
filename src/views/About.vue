<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>About</h1>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Passion for engineering </v-card-title>
            <v-card-text> Photos of my childhood robot </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Career Goals </v-card-title>
            <v-card-subtitle>Where I am heading</v-card-subtitle>
            <v-card-text>
              <div>1-2 Years</div>
              <div>5-10 Years</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Hobbies </v-card-title>
            <v-card-subtitle>Go-Kart Design</v-card-subtitle>
            <v-card-text>Building go-kart, pictures</v-card-text>
            <v-divisor></v-divisor>
            <v-card-subtitle>3D-Printing and electronics</v-card-subtitle>
            <v-card-text></v-card-text>
            <v-divisor></v-divisor>
            <v-card-subtitle>RFS</v-card-subtitle>
            <v-card-text></v-card-text>
            <v-divisor></v-divisor>
            <v-card-subtitle>Programming</v-card-subtitle>
            <v-card-text>Carasel of past programming projects</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>
