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
              alt="Profile photo of Connor Boughton"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="7" justify-center align-self="center">
          <v-card flat class="transparent secondary--text">
            <v-card-title class="headline"> About Me </v-card-title>
            <v-card-text class="secondary--text">
              <p class="font-weight-bold">
                Hi there, I'm Connor. <br />
                Thanks for checking out my e-portfolio!
              </p>
              <p>
                I am a fifth-year Mechatronics Engineering student studying at
                the University of Technology Sydney and a 2020 New Colombo Plan
                Scholar for Malaysia. I am a hard-working student with a
                distinction average academic record and more than two years of
                professional engineering experience.
              </p>
              <p>
                Ever since I was a young child, I knew I wanted to be an
                engineer. I have always had a strong interest in programming,
                electronics, and mechanics, which naturally led me to study
                Mechatronics. I have been developing my programming skills since
                high school, creating numerous websites along the way. I started
                working on small electronics projects in primary school, leading
                to a continued lifelong interest.
              </p>
              <p>
                I am aiming to follow a career working in Manufacturing and
                Automation or Infrastructure. I believe both fields add
                considerable value to Australian society.
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
                to="/contact"
                color="warning"
                dark
                class="px-4 ma-2"
              >
                Contact Me!
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
