import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import Particles from "react-particles-js";
import particles from "../const/particle";
import logo1 from "../img/profile.png";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1
    };
  }
  render() {
    return (
      <div>
        {/* <Particles params={particles} className="particle" /> */}
        <div id="home" className="intro route bg-image">
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <a className="navbar-brand js-scroll" href="#page-top">
            <img
            className="profile-image"
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "400px" }}
            />
          </a>
                <h1 className="intro-title mb-4">Rodrigo Fernandes</h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items"></span>
                  <strong className="text-slider">
                    <Typed
                      strings={[
                        "Mobile Developer",
                        "Full Stack Developer",
                      ]}
                      typeSpeed={80}
                      backDelay={1100}
                      backSpeed={30}
                      loop
                    />
                  </strong>
                </p>
                <p className="pt-3">
                  <a
                    className="btn btn-primary js-scroll px-4"
                    href="#work"
                    role="button"
                  >
                    View My Work
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
