<template>
  <v-container fluid class="fill-height align-self-center">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-alert prominent type="warning" elevation="2" dismissible>
          Work in progress!
        </v-alert>
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Get in touch!</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form disabled>
              <v-text-field label="Name" name="name" type="text"></v-text-field>

              <v-text-field
                label="Email"
                name="email"
                type="email"
              ></v-text-field>

              <v-textarea outlined name="enquiry" label="Enquiry"></v-textarea>
            </v-form>
            <p class="font-italic">
              If you'd like to get in touch complete the form above, or connect
              with me on
              <a
                href="https://au.linkedin.com/in/connor-boughton"
                target="_blank"
                >LinkedIn</a
              >
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" disabled>Send</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  components: {},
};
</script>
