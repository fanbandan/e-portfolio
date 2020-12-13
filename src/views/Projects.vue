<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>Projects</h1>
      <h2 id="academic">Academic Projects</h2>
      <v-row v-masonry>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Mechactronics Unleashed </v-card-title>
            <v-card-subtitle> 48622 Mechatronics 1 </v-card-subtitle>
            <v-carousel
              height="400"
              hide-delimiter-background
              :show-arrows="true"
              class="white--text align-end"
            >
              <v-carousel-item>
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/pjwOmKsC7eE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/mx1-fpga-1.jpg')"
                  :src="require('../assets/projects/mx1-fpga-1.jpg')"
                  height="400"
                  alt="FPGA Programming"
                  title="FPGA Programming"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/mx1-fpga-2.jpg')"
                  :src="require('../assets/projects/mx1-fpga-2.jpg')"
                  height="400"
                  alt="Design Sketch"
                  title="Design Sketch"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-text>
              Selective studio program for high performing students</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Laser Tag Robots </v-card-title>
            <v-card-subtitle> 48623 Mechatronics 2 </v-card-subtitle>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/gbckllF_aLk"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <v-card-text></v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                text
                href="https://github.com/HimavaanChandra/laserRobots"
              >
                Project Github
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Warman Design and Build Project </v-card-title>
            <v-card-subtitle> 48600 Mechanical Design 1 </v-card-subtitle>
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              :show-arrows="true"
              class="white--text align-end"
            >
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/md1-project-1.jpg')"
                  :src="require('../assets/projects/md1-project-1.jpg')"
                  height="400"
                  alt="Our Warman design"
                  title="Our Warman design"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/md1-project-2.jpg')"
                  :src="require('../assets/projects/md1-project-2.jpg')"
                  height="400"
                  alt="The Warman course"
                  title="The Warman course"
                >
                  <!-- <div class="h4 font-weight-bold text-center py-2">
                    The Warman course
                  </div> -->
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/md1-project-4.jpg')"
                  :src="require('../assets/projects/md1-project-4.jpg')"
                  height="400"
                  alt="Inital concept"
                  title="Inital concept"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/md1-project-3.jpg')"
                  :src="require('../assets/projects/md1-project-3.jpg')"
                  height="400"
                  alt="Base of robot"
                  title="Base of robot"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-text> Picture + Bio </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>
              Probabilistic Road Map Path Finding Project
            </v-card-title>
            <v-card-subtitle>
              41012 Programming for Mechatronic Systems
            </v-card-subtitle>
            <iframe
              width="100%"
              height="400"
              :src="require('../assets/projects/pfms-prm.mp4')"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <v-card-text> Picture + GITHUB link </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                text
                href="https://github.com/41012/pfms-2020a-fanbandan/tree/master/scratch/assignments/a4"
              >
                Project Github
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Bar Tending Robot Project </v-card-title>
            <v-card-subtitle> 41014 Sensors and Control </v-card-subtitle>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/j0EaATRQ0Yw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <v-card-text> Video + GITHUB link </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                text
                href="https://github.com/thomasluke/scms-fetch-robot"
              >
                Project Github
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <h2 id="professional">Professional Projects</h2>
      <v-row v-masonry>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> WordPress Website Design </v-card-title>
            <v-card-subtitle> Web Contracting </v-card-subtitle>
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              :show-arrows="true"
              class="white--text align-end"
            >
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/web-contract-1.jpg')"
                  :src="require('../assets/projects/web-contract-1.jpg')"
                  height="400"
                  alt="Ethos Aged Care"
                  title="Ethos Aged Care"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/web-contract-2.jpg')"
                  :src="require('../assets/projects/web-contract-2.jpg')"
                  height="400"
                  alt="InXite"
                  title="InXite"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/web-contract-3.jpg')"
                  :src="require('../assets/projects/web-contract-3.jpg')"
                  height="400"
                  alt="Sarah Muggeridge Mosaics"
                  title="Sarah Muggeridge Mosaics"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Project Management Dashboard </v-card-title>
            <v-card-subtitle>
              Toshiba International Corporation
            </v-card-subtitle>
            <v-carousel
              height="400"
              hide-delimiter-background
              :show-arrows="true"
              class="white--text align-end"
            >
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/tic-dashboard-1.jpg')"
                  :src="require('../assets/projects/tic-dashboard-1.jpg')"
                  height="400"
                  alt="Dashboard sitemap"
                  title="Dashboard sitemap"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/tic-dashboard-2.jpg')"
                  :src="require('../assets/projects/tic-dashboard-2.jpg')"
                  height="400"
                  alt="Dashboard project overview"
                  title="Dashboard project overview"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/tic-dashboard-3.jpg')"
                  :src="require('../assets/projects/tic-dashboard-3.jpg')"
                  height="400"
                  alt="Dashboard project gantt chart"
                  title="Dashboard project gantt chart"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/tic-dashboard-4.jpg')"
                  :src="require('../assets/projects/tic-dashboard-4.jpg')"
                  height="400"
                  alt="Dashboard loading game"
                  title="Dashboard loading game"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Naval Vessel Characterisation </v-card-title>
            <v-card-subtitle>
              Jenkins Engineering Defence Systems
            </v-card-subtitle>
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              :show-arrows="true"
              class="white--text align-end"
            >
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/jeds-1.jpg')"
                  :src="require('../assets/projects/jeds-1.jpg')"
                  height="400"
                  alt="Naval vessel characterisation device"
                  title="Naval vessel characterisation device"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/projects/jeds-2.jpg')"
                  :src="require('../assets/projects/jeds-2.jpg')"
                  height="400"
                  alt="Electronic Warfare radar calculations"
                  title="Electronic Warfare radar calculations"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {},
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

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
</style>
