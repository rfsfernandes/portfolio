import React from "react";
import Slide from "@material-ui/core/Slide";
class SkillSet extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Android_skill",
          content: "Android",
          porcentage: "95%",
          value: "95",
        },
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "95%",
          value: "95",
        },
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "Javascript_skill",
          content: "Javascript",
          porcentage: "73%",
          value: "73",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "Sql_skill",
          content: "SQL",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          porcentage: "60%",
          value: "60",
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "60%",
          value: "60",
        },
      ],
    };
  }

  render() {
    const { language } = this.props;
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <Slide in {...{ timeout: 2500 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12" style={{ textAling: "center" }}>
                      <div className="row">
                        <div
                          className="col-sm-12 col-md-12"
                          style={{ margin: "0 auto" }}
                        >
                          <div
                            className="about-img"
                            style={{ textAlign: "center" }}
                          >
                            <img
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <div className="title-box-2">
                          <h5 className="title-left">
                            {language == "EN" ? "My " : "O meu conjunto de "}
                            <span className="about_span">
                              {language == "EN" ? "Skillset" : "Habilidades"}
                            </span>
                            .
                          </h5>
                        </div>
                        {this.state.skills.map((skill) => {
                          return (
                            <React.Fragment key={skill.id}>
                              <span>{skill.content}</span>{" "}
                              <span className="pull-right">
                                {skill.porcentage}
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: skill.porcentage }}
                                  aria-valuenow={skill.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default SkillSet;
