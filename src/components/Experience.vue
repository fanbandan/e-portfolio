<template>
  <v-sheet
    class="px-4 section-container"
    elevation="4"
    style="z-index: 17"
    color="blue lighten-4"
    id="experience"
  >
    <div class="section py-8">
      <v-row justify="center">
        <v-col col="12" md="5" align-self="center">
          <v-card class="mt-4">
            <v-card-title class="headline">Experience</v-card-title>
            <v-card-text>
              <p>Over 8 years of programming experience</p>
              <p>Experienced in energy and defence industries.</p>
            </v-card-text>
          </v-card>
          <v-card class="mt-4" color="success lighten-4">
            <v-card-title class="headline">Key Achievements</v-card-title>
            <v-card-text>
              <p>Over 8 years of programming experience</p>
              <p>Experienced in energy and defence industries.</p>
            </v-card-text>
          </v-card>
          <v-card class="mt-4" color="">
            <v-card-title class="headline">Key Learnings</v-card-title>
            <v-card-text>
              <p>Over 8 years of programming experience</p>
              <p>Experienced in energy and defence industries.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col col="12" md="7">
          <v-card class="py-8">
            <v-timeline dense>
              <v-timeline-item
                v-for="(job, i) in experience"
                :key="i"
                small
                right
              >
                <template>
                  <div class="py-4">
                    <div class="mb-2">
                      <v-row>
                        <v-col cols="12" md="8">
                          <h3 class="title" v-text="job.role"></h3>
                        </v-col>
                        <v-col cols="12" md="4" class="text-md-right">
                          <v-chip color="primary" class="mr-md-4">
                            <span
                              class="font-weight-bold"
                              v-text="job.dates"
                            ></span>
                          </v-chip>
                        </v-col>
                      </v-row>
                      <div class="subtitle-2" v-text="job.company"></div>
                    </div>
                    <div
                      v-text="job.description"
                      class="experience-description secondary--text font-weight-light font-italic"
                    ></div>
                  </div>
                </template>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    experience: [
      {
        company: "Jenkins Engineering Defence Systems",
        role: "Mechatronics Intern",
        dates: "Jul 2020 - Current",
        description: "Facilitating the development of long-term sensor logging",
      },
      {
        company: "Toshiba Internation Corporation",
        role: "Engineering Support Officer",
        dates: "Jul 2018 - Jan 2020",
        description:
          "Consulted with stakeholders to develop custom web based custom project management software solution",
      },
      {
        company: "Self Employed",
        role: "Web Contractor",
        dates: "Dec 2016 - Jan 2020",
        description: "Realised client ideas and projects as WordPress websites",
      },
      {
        company: "Delaware North Company",
        role: "IT Support",
        dates: "Feb 2015 - Jan 2019",
        description:
          "Managed a team of 3-5 IT technicians, servicing 500+ point of sales",
      },
      {
        company: "NSW Rural Fire Service",
        role: "Volunteer Firefighter",
        dates: "Jan 2018 - Current",
        description:
          "Responding to bushfires and engaging with community in fire preparation practices",
      },
    ],
  }),
};
</script>

<style>
.experience-description {
  font-size: 0.75rem;
}
</style>
