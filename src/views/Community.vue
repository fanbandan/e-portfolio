<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>Leadership & Community</h1>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Leadership </v-card-title>
            <v-card-subtitle> My goals for the future </v-card-subtitle>
            <v-card-text> </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Community </v-card-title>
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              :show-arrows="true"
              class="white--text align-end"
            >
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/hobbies/3d-printing.jpg')"
                  :src="require('../assets/hobbies/3d-printing.jpg')"
                  height="400"
                  alt="3D printed gear mechanism"
                  title="3D printed gear mechanism"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/hobbies/go-kart.jpg')"
                  :src="require('../assets/hobbies/go-kart.jpg')"
                  height="400"
                  alt="Self made go-kart"
                  title="Self made go-kart"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/hobbies/rfs.jpg')"
                  :src="require('../assets/hobbies/rfs.jpg')"
                  height="400"
                  alt="Volunteering for the Rural Fire Service"
                  title="Volunteering for the Rural Fire Service"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-text>
              <p>
                During the summer break, I normally work on my home-made go-kart
                with my two high school friends. In 2018 we designed and
                manufactured our go-kart. Since then, we have determined several
                improvements for the next iteration, and are working on it
                currently. It has been very rewarding putting in practice some
                of the skills I have learnt from university.
              </p>
              <p>
                I’m an active volunteer member of the Mount Kuring-gai Rural
                Fire Brigade. I joined the Rural Fire Service to assist in my
                local community and to help maintain the area I grew up in. I
                normally spend Saturday afternoon training every few weekends.
                I’ve also developed gain a lot of skills for volunteering, such
                as leadership, communication, and resilience.
              </p>
              <p>
                Aside from the above, I also like to program, 3D print, and work
                on electronics projects in my free time.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                large
                rounded
                link
                to="/projects"
                color="primary"
                class="px-4 ma-2"
              >
                My Projects
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Community",
  components: {},
};
</script>
