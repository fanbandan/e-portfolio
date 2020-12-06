<template>
  <v-sheet class="px-4">
    <v-row class="section" justify="start">
      <v-col md="6">
        <v-card flat>
          <v-card-title class="headline">Experience</v-card-title>
          <v-timeline>
            <v-timeline-item
              v-for="(job, i) in experience"
              :key="i"
              small
              right
            >
              <template v-slot:opposite>
                <span class="font-weight-bold" v-text="job.dates"></span>
              </template>
              <template>
                <div class="py-4">
                  <div class="mb-4">
                    <h2 class="title" v-text="job.role"></h2>
                    <div class="subtitle-1" v-text="job.company"></div>
                  </div>
                  <div v-text="job.description"></div>
                </div>
              </template>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    experience: [
      {
        company: "Toshiba Internation Corporation",
        role: "Engineering Support Office",
        dates: "Jul 2018 - Jan 2020",
        description: "foo",
      },
      {
        company: "",
        role: "Web Contractor",
        dates: "Dec 2016 - Current",
        description: "foo",
      },
      {
        company: "Delaware North Company",
        role: "IT Support",
        dates: "Feb 2015 - Jan 2019",
        description: "foo",
      },
      {
        company: "",
        role: "NSW Rural Fire Service",
        dates: "Jan 2018 - Current",
        description: "foo",
      },
    ],
  }),
};
</script>

<style></style>
