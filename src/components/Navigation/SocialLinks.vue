<template>
  <div>
    <v-btn text :href="`${publicPath}Resume.pdf`" target="_blank" class="mx-1">
      <v-icon left>mdi-download</v-icon> Resume
    </v-btn>
    <v-btn
      icon
      link
      href="https://au.linkedin.com/in/connor-boughton"
      large
      class="mx-1"
    >
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn icon link href="https://github.com/fanbandan/" large class="mx-1">
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <v-btn
      icon
      link
      href="https://www.youtube.com/watch?v=I16_Z1yCCcE&list=PLQwrq-hIMmG_qPvNm-6vhzsoG92JLf17l"
      large
      class="mx-1"
    >
      <v-icon>mdi-youtube</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
};
</script>
