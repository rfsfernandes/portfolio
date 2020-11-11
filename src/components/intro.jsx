import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import Slide from "@material-ui/core/Slide";
import logo1 from "../img/profile.png";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
    };
  }
  render() {
    const { language } = this.props;
    return (
      <div>
        <Slide in {...{ timeout: 1500 }}>
          <div id="home" className="intro route bg-image">
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <a className="navbar-brand js-scroll" href="#page-top">
                    <img
                      className="profile-image"
                      src={this.state.logo}
                      alt="logo"
                      style={{ maxWidth: "55%" }}
                    />
                  </a>
                  <h1 className="intro-title mb-4">Rodrigo Fernandes</h1>
                  <p className="intro-subtitle">
                    <span className="text-slider-items"></span>
                    <strong className="text-slider">
                      <Typed
                        strings={
                          language == "EN"
                            ? ["Mobile Developer", "Full Stack Developer"]
                            : [
                                "Desenvolvedor Mobile",
                                "Desenvolvedor Full Stack",
                              ]
                        }
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
                      {language == "EN" ? "View My Work" : "Ver o Meu Trabalho"}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default Intro;