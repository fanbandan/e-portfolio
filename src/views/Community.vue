<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>Leadership & Community</h1>
      <v-row>
        <v-col cols="12" md="6">
          <v-card id="leadership">
            <v-card-title> Leadership </v-card-title>
            <v-card-text>
              <p>
                Over the past five years, I have developed my leadership
                capabilities considerably. I view leadership as an incredibly
                important ability.
              </p>
              <p>
                Starting in high school, whilst working at Delaware North
                Company in IT, I gained approximately two years of leadership
                experience at the Sydney Cricket Ground. Working in teams
                ranging in size from two to five, our job was to provide IT
                assistance and support to all the stadium outlets (300+). With
                thousands of people attending game day events, this was a
                high-pressure job, as IT issues meant frustrated customers and
                potentially significant loss of revenue. As the team leader, my
                role involved taking extra initiative, including the escalation
                of issues from junior staff, extensive problem solving, and the
                coordination of my team to best respond to IT issues.
              </p>
              <p>
                From my experiences at Delaware North Company, I have now gone
                on to lead several group projects throughout my university
                degree. During my first semester in 48230 Engineering
                Communications, I led a group of five working on a proposed
                biogas energy solution for small Vanuatu communities as part of
                the Engineers Without Borders Challenge. In my third semester as
                part of 48240 Design and Innovation Fundamentals, I led a group
                of three in designing an emergency survival kit. More recently,
                as part of 48600 Mechanical Design 1, I led a group of four in
                designing and manufacturing an autonomous robot for the Warman
                Design and Build Challenge.
              </p>
              <p>
                I have also gained leadership skills from my experience
                volunteering for the Rural Fire Service. I have previously been
                involved in the training of new RFS members. I assisted them in
                developing the skills and competencies required to obtain the
                Bush Firefighting accreditation. This included familiarisation
                with standard tools and equipment and running practice drills.
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
                See My Projects
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card id="teamwork">
            <v-card-title> Teamwork </v-card-title>
            <v-card-text>
              <p>
                As mentioned on my about page, I am a volunteer Rural Fire
                Service member for the Mount Kuring-gai Brigade. From my
                experience as a volunteer firefighter, I know the importance of
                teamwork.
              </p>
              <p>
                Working in strike teams during the Black Summer bushfires, I
                learnt some keys factors for effective teamwork. It included
                strong communication, ensuring everyone is on the same page even
                in stressful situations, and providing support, ensuring
                teammates are safe and assisting them where you can.
              </p>
              <p>
                Throughout my university degree, I have worked on numerous group
                projects. To achieve excellent results requires equally
                excellent teamwork. You can view some of my experiences using
                the link below.
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
                See My Projects
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
