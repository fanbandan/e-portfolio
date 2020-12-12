<template>
  <v-sheet width="100%" class="px-4 my-8 text-center" id="more">
    <div class="section">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-btn raised x-large block link to="/skills">
            <v-icon left>mdi-book-open-page-variant</v-icon> Skills
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-btn raised x-large block link to="/media">
            <v-icon left>mdi-newspaper</v-icon> Media
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-btn raised x-large block link to="/projects">
            <v-icon left>mdi-archive</v-icon> Projects
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
    };
  },
};
</script>

<style></style>
