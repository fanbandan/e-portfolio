<template>
  <v-sheet class="px-4" elevation="4" color="blue lighten-4" id="experience">
    <div class="section py-8">
      <v-row justify="center">
        <v-col md="4" align-self="center">
          <v-card class="mt-4">
            <v-card-title class="headline">Experience</v-card-title>
            <v-card-text>
              <p>Over 8 years of programming experience</p>
              <p>Experienced in engery and defence industries.</p>
            </v-card-text>
          </v-card>
          <v-card class="mt-4">
            <v-card-title class="headline">Education</v-card-title>
            <v-card-text>
              <div>
                Bachelor of Engineering Major in Mechatronics (Honours) with
                Diploma
              </div>
              <div class="green--text font-weight-bold">
                University of Technology Sydney
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div>
                Certificate III Information, Digital Media and Technology
              </div>
              <div class="green--text font-weight-bold">
                Northern Sydney Institute of TAFE
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="8">
          <v-card class="py-8">
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
                    <div class="mb-2">
                      <h3 class="title" v-text="job.role"></h3>
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
