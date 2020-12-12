<template>
  <div class="section">
    <v-container fluid class="fill-height align-self-center">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-sheet>
            <h1>404 - Not Found</h1>
            <h2 class="subtitle-1">
              Hmmmm this isn't right, the page you are looking for seems to be
              missing
            </h2>
            <v-btn large color="primary" link to="/" class="my-4">Home</v-btn>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "404",
  components: {},
};
</script>
