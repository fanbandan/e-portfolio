<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>About</h1>
      <v-row v-masonry>
        <!-- <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Passion for engineering </v-card-title>
            <v-card-text> Photos of my childhood robot </v-card-text>
            <v-img
              :lazy-src="require('../assets/hobbies/childhood-robot.jpg')"
              :src="require('../assets/hobbies/childhood-robot.jpg')"
              max-width="400"
              alt="Mount Kuring-gai RFS Premier's Citation group photo"
            >
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </v-card>
        </v-col> -->
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Career Goals </v-card-title>
            <v-card-subtitle> My goals for the future </v-card-subtitle>
            <v-card-text>
              <p>
                In the short term, I’m aiming to find a graduate position in the
                Defence Industry or working with Infrastructure after completing
                my university degree.
              </p>
              <p>
                I’d also like to return to Malaysia as part of my New Colombo
                Plan program, to gain experience living and working in another
                culture. It would be a great opportunity to further my
                intercultural skills and understanding. With Asia set to host
                some of the biggest economies of the 21st century, I believe
                having a strong understanding of the culture and connections
                throughout the region will be invaluable.
              </p>
              <p>
                Long term, I see myself in a management style role. I believe
                this type of role would be rewarding, and lead to a career where
                I can embrace lifelong learning principals and practice
                leadership. I am actively working on developing the skillset for
                management
              </p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-title class="">Areas of Development</v-card-title>
            <v-card-subtitle>
              Skills I am actively working on improving
            </v-card-subtitle>
            <v-card-text>
              <div v-for="(skill, i) in skills" :key="i">
                <template>
                  <div class="py-2">
                    <div v-text="skill.skill" class="font-italic mb-2"></div>
                    <v-progress-linear
                      :color="skill.colour"
                      buffer-value="0"
                      :value="skill.progress"
                      rounded
                      stream
                    ></v-progress-linear>
                  </div>
                </template>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                large
                rounded
                link
                to="/skills"
                color="primary"
                class="px-4 ma-2"
              >
                My Skills
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Hobbies </v-card-title>
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
                Service Fire Brigade. I’ve lived my whole life adjacent to
                bushland in the Hornsby Shire. For me and many other local
                residents the RFS has always been an important part of the
                community. As such, I joined to support and protect the area I
                grew up in. I have participated in numerous community events,
                conducted hazard reductions, and assisted in fire fighting
                efforts. As part of this experience, I’ve developed numerous
                skills, such as leadership, communication, and resilience.
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
  name: "About",
  components: {},
  data: () => ({
    skills: [
      {
        skill: "Forecasting and planning",
        progress: 40,
        colour: "indigo",
      },
      {
        skill: "Engaging with relevant community and stakeholders",
        progress: 70,
        colour: "amber",
      },
      {
        skill: "Contracts and scope of works",
        progress: 50,
        colour: "deep-orange",
      },
      {
        skill: "Practice working with legal and regulatory requirements",
        progress: 10,
        colour: "teal",
      },
      {
        skill: "Contributing to proposals, bids, and tender documents",
        progress: 20,
        colour: "cyan",
      },
    ],
  }),
  mounted() {
    this.repaint();
  },
  watch: {
    items: function () {
      this.repaint();
    },
  },
  methods: {
    repaint() {
      setTimeout(() => this.$redrawVueMasonry(), 1500);
    },
  },
};
</script>
