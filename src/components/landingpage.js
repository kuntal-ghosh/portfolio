import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import image from "./profile.jpg";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "0px" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={image} alt="avatar" className="avatar-img" />

            <div className="banner-text">
              <h1>Full Stack Web & Sharepoint Developer</h1>

              <hr />

              <p>
                HTML/CSS | SASS | Bootstrap | JavaScript | React | C# | Asp.Net
                | MSSql | Sharepoint
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/kuntal-ghosh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/kuntal-ghosh?tab=repositories"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://learn.freecodecamp.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="https://twitter.com/kuntal__ghosh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
