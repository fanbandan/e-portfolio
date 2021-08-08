<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>Projects</h1>
      <h2 id="academic">Academic Projects</h2>
      <v-row v-masonry>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Mechactronics Unleashed </v-card-title>
            <v-card-subtitle>
              <v-chip color="primary" small class="mr-2">
                <span class="font-weight-bold">2019</span>
              </v-chip>
              <span>48622 Mechatronics 1</span>
            </v-card-subtitle>
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
              <p>
                As part of my Mechatronics 1 subject, I participated in an
                optional selective program for advanced students known as
                Mechatronics Unleashed.
              </p>
              <p>
                This program allowed me to go above and beyond the base course
                material, requiring me to develop a deeper understanding of
                fundamental mechatronics principles. During this program, I
                designed and built a stepper motor control system for a future
                automated manufacturing project and an alarm clock which created
                custom alarms based on my google calendar. The stepped motor
                control system is shown above.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Laser Tag Robots </v-card-title>
            <v-card-subtitle>
              <v-chip color="primary" small class="mr-2">
                <span class="font-weight-bold">2019</span>
              </v-chip>
              <span>48623 Mechatronics 2</span>
            </v-card-subtitle>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/gbckllF_aLk"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <v-card-text>
              <p>
                As part of the Mechatronics 2 subject, I led a team of eight
                students to design and build two laser tag robots for a
                BattleBots style project.
              </p>
              <p>
                The project was ambitious and complex, involving a central game
                master control program, the design and assembly of an
                omnidirectional robot, positional tracking, pathfinding, and
                Robot Operating System (ROS) integration. Despite this, the
                project still managed to exceed the expectations of the subject
                coordinators. They reported it was "bigger than Ben Hur".
              </p>
              <p>
                As the team leader, I was responsible for organising the group,
                setting deadlines, allocating tasks, and providing assistance
                where needed. As one of the most proficient programmers in the
                group, I also assigned myself to develop an arena map creation
                and simulation software. This component took the robot's
                position and the arena map, assessed the robot's distance to
                nearby obstacles, and then fed this information into the
                decision-making algorithm via ROS.
              </p>
            </v-card-text>
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
            <v-card-subtitle>
              <v-chip color="primary" small class="mr-2">
                <span class="font-weight-bold">2019</span>
              </v-chip>
              <span>48600 Mechanical Design 1</span>
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
            <v-card-text>
              <p>
                As part of the 32nd Warman Design and Build Competition, I led a
                group of three to design and manufacture a robot to transport
                hazardous vessels (balls seen in the images above) from one
                compound to another. The project specified a robot size
                constraint, fully automated control requirements, and a maximum
                execution time of 120 seconds.
              </p>
              <p>
                My group decided on a novel solution to use a bucket scoop
                similar to a construction excavator to collect the vessels. We
                designed the robot in CAD and laser cut the frame from plywood.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>
              Probabilistic Road Map Path Finding Project
            </v-card-title>
            <v-card-subtitle>
              <v-chip color="primary" small class="mr-2">
                <span class="font-weight-bold">2020</span>
              </v-chip>
              <span>41012 Programming for Mechatronic Systems</span>
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
            <v-card-text>
              <p>
                As part of my Programming for Mechatronics Systems coursework, I
                created a Probabilistic Road Map path planner. The project used
                random point generation to solve for a path from one location to
                another.
              </p>
              <p>
                This technique has applications in the movement of autonomous
                robots, as it works well with the type of maps created from
                lidar scans.
              </p>
              <p>
                Overall, I did very well in this subject, obtaining a 97% course
                mark.
              </p>
            </v-card-text>
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
            <v-card-subtitle>
              <v-chip color="primary" small class="mr-2">
                <span class="font-weight-bold">2020</span>
              </v-chip>
              <span>41014 Sensors and Control</span>
            </v-card-subtitle>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/j0EaATRQ0Yw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
            <v-card-text>
              <p>
                As part of my Sensors and Control for Robotics Systems subject,
                I led a team of three to develop and program an autonomous Fetch
                Robot.
              </p>
              <p>
                Our proposed scenario for this project was an assistant
                bartending robot. The goal was to have the Fetch Robot assist in
                bartending duties at high volume bars and generate a novel
                experience for the guests.
              </p>
              <p>Our project achieved the highest mark in the cohort.</p>
            </v-card-text>
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
      <h2 id="professional" class="mt-2">Professional Projects</h2>
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
            <v-card-text>
              <p>
                The photos above show examples of the web development work I
                have engaged in as part of my web contracting business.
              </p>
              <p>
                My activities included consultation with clients to establish
                the scope of work and the development of implementation plans. I
                was also responsible for designing, programming, and testing the
                websites, as well as time management, invoicing, and staff
                training.
              </p>
              <p class="font-weight-bold">Achievements</p>
              <p>
                Created website solutions for InXite Development Management,
                Ethos Aged Care, Sarah Muggeridge Mosaics, and Kuring-gai High
                School.
              </p>
            </v-card-text>
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
            <v-card-text>
              <p>
                Whilst working at Toshiba International Corporation, I designed
                and developed a custom web-based system to assist in the
                management of major and minor power station outages. The
                introduction of the system enabled significant cost savings and
                allowed project managers to plan and utilise resources more
                efficiently.
              </p>
              <p class="font-weight-bold">Project Achievements</p>
              <p>
                Met all deadlines and exceeded stakeholder expectations. Trained
                over 20 staff members with varying levels of expertise.
                Developed standards for communication between the in-house
                software. Created documentation for future maintenance of the
                software.
              </p>
            </v-card-text>
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
            <v-card-text>
              <p>
                My first project working at Jenkins Engineering Defence Systems
                was developing a system for long-term sensor logging for the
                characterisation of naval vessels as part of a larger Electronic
                Warfare Project.
              </p>
            </v-card-text>
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
