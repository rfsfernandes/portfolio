import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Android_skill",
          content: "Android",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "95%",
          value: "95"
        },
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "Javascript_skill",
          content: "Javascript",
          porcentage: "73%",
          value: "73"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Sql_skill",
          content: "SQL",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "60%",
          value: "60"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
           "I consider myself an endless learner: I love learning and I will always be learning. That's the life of a programmer, right? "
           + "You never stop learning. And if you do... it's the end!"
        },
        {
          id: "second-p-about",
          content:
            "I'm a very organized person. I like to keep my code, my files and my directories, organized so I don't lose track of what I'm doing or "
            + "where is the information I need for my work. I always go for the same work tree in every project I do. The same goes for my desktop, I " + 
            "need to keep it clean. It must be clean. I'm a perfectionist."
        },
        {
          id: "third-p-about",
          content:
            "As a programmer, I like to face the challenge, those are the one that keep me going. They keep me alive. Because of that, I became very devoted " + 
            "and I always give my whole to what I do, to what I'm developing, in order to reach both visual perfection and overall performance."
        },
        {
          id: "fourth-p-about",
          content:
            "I have a very good way of seeing things and imagine them in my head, a good perspective of things. That gives me the power to determine the best way (for me at least) to solve "
            + "problems and aim for what is more important and be objective."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
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
                      {/* <p className="title-s">Skills</p> */}
                      {this.state.skills.map(skill => {
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
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Hello, I'm <span class="about_span">Rodrigo</span>.</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
