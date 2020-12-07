<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>Skills</h1>
      <v-alert
        border="top"
        colored-border
        type="info"
        elevation="2"
        dismissible
        class="mt-2"
      >
        I programmed this website
      </v-alert>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Soft Skills </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Technical Skills </v-card-title>
            <v-card-subtitle> THIS WEBSITE </v-card-subtitle>
            <v-card-text>WHITECARD + any other certificates</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Engineers Australia Comptencies </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <h2>Engineers Australia Comptencies</h2>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="12" md="8"> Ethics</v-col>
                <v-col cols="12" md="4" class="text-md-right">
                  <v-chip color="success">
                    <span class="font-weight-bold">Obtained</span>
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="12" md="8"> Ethics</v-col>
                <v-col cols="12" md="4" class="text-md-right">
                  <v-chip color="warning">
                    <span class="font-weight-bold">Goal</span>
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Skills",
  components: {},
};
</script>
