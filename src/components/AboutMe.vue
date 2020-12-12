<template>
  <v-sheet
    class="px-4 section-container"
    color="indigo lighten-5"
    elevation="4"
    style="z-index: 3"
    id="about"
  >
    <div class="section py-8">
      <v-row justify="center">
        <v-col cols="6" md="3" offset-md="1">
          <v-card elevation="2">
            <v-img
              contain
              :lazy-src="require('../assets/profile.jpg')"
              :src="require('../assets/profile.jpg')"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="7" justify-center align-self="center">
          <v-card flat class="transparent secondary--text">
            <v-card-title class="headline"> About Me </v-card-title>
            <v-card-text class="secondary--text">
              <p>
                <span class="font-weight-bold">
                  Hi I'm Connor, thanks for checking out my e-portfolio!
                </span>
              </p>
              <p>
                I'm a fourth year Mechatronics Engineering Student at the
                University of Technology Sydney and a 2020 New Colombo Plan
                Scholar for Malaysia.
                <br />
                I've always had a strong interest in programming, electrical,
                and mechanical engineering. I've been developing my programming
                skills since my interest first peaked in Highschool. I'm aiming
                to follow a career path working in Defence or Infrastructure. I
                believe both fields add value to Australian society, and feel I
                can meaningful impact.
              </p>
            </v-card-text>
            <div class="d-flex flex-wrap justify-center justify-md-start">
              <v-btn
                large
                rounded
                link
                to="/about"
                color="primary"
                dark
                class="px-4 ma-2"
              >
                Get to know me more!
              </v-btn>
              <v-btn
                large
                rounded
                link
                to="/skills"
                color="success"
                dark
                class="px-4 ma-2"
              >
                My Skills!
              </v-btn>
              <v-btn
                large
                rounded
                link
                to="/community#leadership"
                color="warning"
                dark
                class="px-4 ma-2"
              >
                Community Engagement!
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style></style>
