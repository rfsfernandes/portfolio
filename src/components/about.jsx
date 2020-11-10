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
      about_me: [
        {
          id: "first-p-about",
          content:
            "I consider myself a very professional and organized person. I like to keep my desk organized and clean, so there is no distraction possible. Therefore, so are my code and my projects. This way I can more easily follow what I am developing.",
        },
        {
          id: "second-p-about",
          content:
            "I like to maintain consistency, so all my current projects always follow the same template, in terms of structure, created by me. In addition to this, I always try to be as efficient as possible, so I became very proficient on my time management.",
        },
        {
          id: "third-p-about",
          content:
            "Throughout my academic and professional I managed to improve and perfect my teamwork , because without a team everything is much more boring and much more difficult. Teamwork is fundamental and a priority. I always try to help my teammates, just as I" +
            " also ask for help when I have more difficulties. The entire development process has to be carried out with enormous mutual assistance between the team members.",
        },
        {
          id: "fourth-p-about",
          content:
            "As a very dedicated person and committed to everything I do, I am also perfectionist and demanding with myself. I consider myself an endless learner: I love learning and I will always be learning. That's the life of a programmer, right? You never stop learning. And if you do... it's the end!",
        },
        {
          id: "five-p-about",
          content:
            "I have a very objective attitude, which leads me to solve problems relatively quickly and focus on priorities. I have always liked challenges and, therefore, I have developed a good problem-solving capacity, be they professional or personal.",
        },
      ],
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
                  <div className="col-md-12">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          Hello, I'm <span class="about_span">Rodrigo</span>.
                        </h5>
                      </div>
                      {this.state.about_me.map((content) => {
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
