<template>
  <div class="section">
    <v-container class="mt-8">
      <h1>Skills</h1>
      <v-alert
        border="top"
        colored-border
        type="info"
        elevation="2"
        dismissible
        class="mt-2"
      >
        I programmed this website
      </v-alert>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Soft Skills </v-card-title>
            <v-card-text>
              <div class="font-weight-bold">Leadership</div>
              <div>
                Organised and led over a dozen univeristy group projects
              </div>
              <div>
                Community leader as a member of the NSW Rural Fire Service
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div class="font-weight-bold">Communication</div>
              <div>
                Learnt strong communications skills from client consultation and
                conveying technical information to senior managers at Toshiba
                International Corporation
              </div>
              <div>
                Utilise strong communication skills on firegrounds as a member
                of the NSW Rural Fire Service
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div class="font-weight-bold">Business</div>
              <div>
                Learnt scoping skills from developing project requirements at
                Toshiba International Corporation and web contract work
              </div>
              <div>
                Gained time management skills from studying and meeting client
                deadlines
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div class="font-weight-bold">Research</div>
              <div>
                Developing research skills as a member of the Jenkins
                Engineering Defence Systems Research and Development Team
              </div>
              <div>
                Developed self directed learning and problem solving skills from
                Mechatronics Unleashed Program
              </div>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> Technical Skills & Qualifications </v-card-title>
            <v-card-text>
              <div class="font-weight-bold">Programming</div>
              <div>
                Experienced in Web development, and Embedded programming
              </div>
              <div>Skilled in C# .NET Core, MATLAB, and C++</div>
              <div>Familiar with NodeJS, Python, PHP, MySQL and SQL</div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div class="font-weight-bold">CAD</div>
              <div>Experience in Solidworks</div>
              <div>
                Practiced in developing models, sketches, and conducting Finite
                Element Anaylsis
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div class="font-weight-bold">Robotics / Hardware</div>
              <div>Familiar with Robotics Operating System (ROS)</div>
              <div>
                Significant experience working with Arduinos and Raspberry Pi's
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div class="font-weight-bold">
                Proficient Microsoft Office Products
              </div>
              <div>Excel, Visio, Word, Powerpoint</div>
              <div>
                Highly knowledgable in Excel formulas, calculations, and
                automation
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div class="font-weight-bold">White Card</div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div class="font-weight-bold">Drivers License</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <h2>Engineers Australia Comptencies</h2>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="12" md="8"> Ethics</v-col>
                <v-col cols="12" md="4" class="text-md-right">
                  <v-chip color="success">
                    <span class="font-weight-bold">Obtained</span>
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="12" md="8"> Ethics</v-col>
                <v-col cols="12" md="4" class="text-md-right">
                  <v-chip color="warning">
                    <span class="font-weight-bold">Goal</span>
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Skills",
  components: {},
};
</script>
