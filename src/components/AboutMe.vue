<template>
  <v-sheet class="px-4" color="indigo lighten-5" elevation="10" id="about">
    <div class="section py-8">
      <v-row justify="space-around">
        <v-col md="3">
          <v-card elevation="2">
            <v-img
              contain
              :lazy-src="require('../assets/profile.jpg')"
              :src="require('../assets/profile.jpg')"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col justify-center align-self="center" md="6">
          <v-card flat class="transparent indigo--text">
            <v-card-title class="headline"> About Me </v-card-title>
            <v-card-text class="indigo--text">
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
                skills since my interest first peeked in Highschool. I'm aiming
                to follow a career path working in Defence or Infrastructure. I
                believe both fields add value to Australian society, and feel I
                can meaniful impact.
              </p>
            </v-card-text>
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
