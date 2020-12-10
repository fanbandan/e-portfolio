<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>Media</h1>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="mb-4">
            <v-card-title class="">
              New Colombo Plan Award Ceremony
            </v-card-title>
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              :show-arrows="false"
              class="white--text align-end"
            >
              <v-carousel-item>
                <v-img
                  :lazy-src="require('../assets/media/ncp-award-ceremony.jpg')"
                  :src="require('../assets/media/ncp-award-ceremony.jpg')"
                  height="400"
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
                >
                  <div class="fill-height bottom-gradient"></div>
                </v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-subtitle>
              November 2019 - Parliament House, Canberra
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Receiving the 2020 New Colombo Plan Scholarship</div>
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
            <v-img
              :lazy-src="require('../assets/media/ncp-blog.jpg')"
              :src="require('../assets/media/ncp-blog.jpg')"
              class="white--text align-end"
            >
              <div class="fill-height bottom-gradient">
                <v-card-title class="">Malaysia Blog </v-card-title>
              </div>
            </v-img>
            <v-card-subtitle>
              September 2020 - Penang, Malaysia
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                Blog post written about my experience in living and studying in
                Malaysia
              </div>
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
          <v-card class="mb-4">
            <v-img
              :lazy-src="require('../assets/media/ncp-blog.jpg')"
              :src="require('../assets/media/ncp-blog.jpg')"
              class="white--text align-end"
            >
              <div class="fill-height bottom-gradient">
                <v-card-title class="">RFS Premiers Citation</v-card-title>
              </div>
            </v-img>
            <v-card-subtitle>
              December 2020 - Mount Kuring-gai Rural Fire Brigade
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                Recieved Premiers Citation for assisting in the 2019-2020 Black Summer Bushfire.
              </div>
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
          <v-card class="mb-4">
            <v-card-title>UTS Careers Podcast</v-card-title>
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/Ss5L3zHoQGM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <v-card-subtitle> November 2020 - UTS Careers </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                A podcast organised by UTS careers discussing the benefits of
                internships and how to find them
              </div>
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
            <v-card-title>UTS Careers Pannelist</v-card-title>
            <iframe
              width="100%"
              height="340"
              src="https://www.youtube.com/embed/i7-y04DDMTg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <v-card-subtitle> September 2020 - UTS Careers </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                Experiencing an internship is one of the best ways to meet the
                challenge of getting job-ready when you spend most of your
                degree at a university, not a workplace.
              </div>
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
          <v-card class="mb-4">
            <v-img>
              <v-card-title>UTS Careers Article</v-card-title>
            </v-img>
            <v-card-subtitle> November 2020 - UTS Careers </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                An interview article written by UTS careers on finding an
                internship during the corona virus pandemic
              </div>
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
