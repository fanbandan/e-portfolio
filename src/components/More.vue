<template>
  <v-sheet flat tile width="100%" class="px-4 mb-4 mt-8 text-center" id="more">
    <div class="section">
      <v-row>
        <v-col>
          <v-btn raised x-large block link to="/media">
            <v-icon left>mdi-newspaper</v-icon> Media
          </v-btn>
        </v-col>
        <v-col>
          <v-btn raised x-large block link to="/skills">
            <v-icon left>mdi-book-open-page-variant</v-icon> Skills
          </v-btn>
        </v-col>
        <v-col>
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
