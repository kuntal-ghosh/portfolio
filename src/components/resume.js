import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import image from "./profile.jpg";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={image}
                alt="avatar"
                style={{ height: "200px", borderRadius: "50%" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Kuntal Ghosh</h2>
            <h4 style={{ color: "black" }}>Profile</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h7>
              Ambitious, Quick-learner, Self-motivated, Positive attitude and
              effective under-pressure. These are just some of the qualities I
              have.
            </h7>
            <p>
              <br />
              • Developed 8+ web applications for several reputed organizations
              <br /> • Designer and developer of two web based pos solutions
              <br /> • Developer and moderator of six 4.6+ rating app
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h4>Address</h4>
            <p>Dhaka 1212</p>
            <h4>Phone</h4>
            <p>(+880) 1772-132915</p>
            <h4>Email</h4>
            <p>kuntalghosh.ewu@gmail.com</p>
            <h4>Web</h4>
            <p>https://kuntal-ghosh.github.io</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2012}
              endYear={2017}
              schoolName="East West University"
              schoolDescription="Bachelor of Science in Computer Science and Engineering"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={"july 2019"}
              endYear={"present"}
              jobName="Raihana Consulting"
              designation="Sharepoint Developer"
              jobDescription={
                <div>
                  <div>
                    I have contributed in several projects of this Company which
                    works in Microsoft Technologies.
                  </div>
                  <div>
                    • Design, develop, debug and test SPFX 2019 Application,
                  </div>
                  <div>• Develop Webparts using modern Technologies.</div>
                </div>
              }
            />

            <Experience
              startYear={"Oct 2018"}
              endYear={"April 2019"}
              jobName="Perky Rabbit "
              designation=".Net Developer"
              jobDescription={
                <div>
                  <div>
                    I started my professional career in this company. My team
                    already have developed two large scaled webs based pos
                    solution for several reputed companies.
                  </div>
                  <div>• Design, develop, debug and test application,</div>
                  <div>• Data encryption and secured login procedure,</div>
                  <div>
                    • Provide flexible application architecture with high
                    customizability{" "}
                  </div>
                </div>
              }
            />
            <Experience
              startYear={"Nov2018"}
              endYear={"Jan 2019"}
              jobName="QUANTUM METHOD (REMOTE) "
              designation="Software Engineer(Volunteer)"
              jobDescription={
                <div>
                  <div>
                    I have contributed in several projects of this institution
                    whose main goal is social and humanitarian improvements.
                  </div>
                  <div>• Design and develop web applications,</div>
                  <div>
                    • Moderation and upgradation of existing web applications
                  </div>
                </div>
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="C#" progress={80} />
            <Skills skill="HTML/CSS/SASS" progress={80} />
            <Skills skill="Asp.Net" progress={50} />
            <Skills skill="React.js" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
