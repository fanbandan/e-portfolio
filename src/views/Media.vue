<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>Media</h1>
      <v-row v-masonry>
        <v-col cols="12" md="4">
          <v-card class="mb-4">
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              :show-arrows="true"
              class="white--text align-end"
            >
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/media/ncp-award-ceremony.jpg')"
                  :src="require('../assets/media/ncp-award-ceremony.jpg')"
                  height="400"
                  alt="Connor Boughton after recieving NCP award"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="
                    require('../assets/media/ncp-malaysia-high-commission.jpg')
                  "
                  :src="
                    require('../assets/media/ncp-malaysia-high-commission.jpg')
                  "
                  height="400"
                  alt="Connor Boughton at the High Commission of Malaysia"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-title class="">
              New Colombo Plan Award Ceremony
            </v-card-title>
            <v-card-subtitle>
              November 2019 - Parliament House, Canberra
            </v-card-subtitle>
            <v-card-text>
              <p>Receiving the 2020 New Colombo Plan scholarship.</p>
              <p>
                The New Colombo Plan is a prestigious scholarship by the
                Australian Government. It aims to lift knowledge of the Indo
                Pacific in Australia by supporting Australian undergraduates to
                study and undertake internships in the region.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                text
                href="https://www.uts.edu.au/current-students/news/want-be-paid-life-changing-trip-overseas"
              >
                Read it here
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mb-4">
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              :show-arrows="true"
              class="white--text align-end"
            >
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/media/ncp-blog-1.jpg')"
                  :src="require('../assets/media/ncp-blog-1.jpg')"
                  height="400"
                  alt="Malaysian street art"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/media/ncp-blog-2.jpg')"
                  :src="require('../assets/media/ncp-blog-2.jpg')"
                  height="400"
                  alt="View of Penang"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/media/ncp-blog-3.jpg')"
                  :src="require('../assets/media/ncp-blog-3.jpg')"
                  height="400"
                  alt="USM buddies and exchange students"
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-title class="">Malaysia Blog </v-card-title>
            <v-card-subtitle>
              September 2020 - Penang, Malaysia
            </v-card-subtitle>
            <v-card-text>
              <p>
                Blog post written about my experience living and studying in
                Malaysia, published by the University of Technology Sydney.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                text
                href="https://www.uts.edu.au/current-students/opportunities/global-opportunities/think-global-story-hub/global-exchange/penang-malaysia-food-study-and-exploration"
              >
                Read it here
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mb-4">
            <v-img
              :lazy-src="require('../assets/media/rfs-premiers-citation.jpg')"
              :src="require('../assets/media/rfs-premiers-citation.jpg')"
              min-height="300"
              alt="Mount Kuring-gai RFS Premier's Citation group photo"
            >
              <div class="fill-height bottom-gradient"></div>
            </v-img>
            <v-card-title class="">RFS Premier's Citation</v-card-title>
            <v-card-subtitle>
              December 2020 - Mt Kuring-gai Rural Fire Brigade
            </v-card-subtitle>
            <v-card-text>
              <p>
                Receiving Premiers Citation for assisting in the 2019-2020 Black
                Summer Bushfires.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mb-4">
            <v-card-title>UTS Careers Podcast</v-card-title>
            <v-card-subtitle> November 2020 - UTS Careers </v-card-subtitle>
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/Ss5L3zHoQGM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <v-card-text>
              <p>
                I joined a UTS careers podcast as a guest speaker discussing the
                benefits of internships and how to find them.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                text
                href="https://www.uts.edu.au/current-students/support/student-learning-hub/news/how-get-summer-internship"
              >
                Listen to it here
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mb-4">
            <v-card-title>UTS Careers Panellist</v-card-title>
            <v-card-subtitle> September 2020 - UTS Careers </v-card-subtitle>
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/i7-y04DDMTg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <v-card-text>
              <p>
                I presented as a panellist as part of a UTS Careers presentation
                on "Getting an Internship During the Pandemic". Over 80 students
                from all disciplines joined to listen to the event.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                text
                href="https://www.youtube.com/watch?v=i7-y04DDMTg"
              >
                Watch it here
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="mb-4">
            <v-card-title>UTS Careers Article</v-card-title>
            <v-card-subtitle> November 2020 - UTS Careers </v-card-subtitle>
            <v-card-text>
              <p>
                An interview article written by UTS Careers on finding an
                internship during the corona virus pandemic, based on my
                personal experiences.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                text
                href="https://careersblog.uts.edu.au/how-to-land-an-internship-during-a-pandemic/"
              >
                Read it here
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
  name: "Media",
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
