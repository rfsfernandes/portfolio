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
      about_meEN: [
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
      about_mePT:[
        {
          id: "first-p-about",
          content:
            "Considero-me uma pessoa bastante profissional e organizada. Gosto de manter a minha mesa de trabalho organizada e limpa, para que não haja nenhuma distração. Por conseguinte, o meu código e os meus projetos também o são, desta forma consigo seguir mais facilmente o que estou a desenvolver.",
        },
        {
          id: "second-p-about",
          content:
            "Gosto de manter consistência, pelo que todos os meus projetos atuais seguem sempre o mesmo template, em termos de estrutura, criado por mim. Para além disto, tento ser sempre o mais eficiente possível, pelo que consigo ter uma boa gestão do tempo.",
        },
        {
          id: "third-p-about",
          content:
            "Tenho melhorado e aperfeiçoado o meu trabalho em equipa ao longo da minha vida académica e profissional, pois sem uma equipa tudo é mais chato e muito mais difícil. O trabalho de equipa é fundamental e é uma prioridade. Tento sempre ajudar os meus colegas de equipa, tal como também lhes peço ajuda quando sinto mais dificuldades. Todo o processo de desenvolvimento tem de ser realizado com uma enorme entreajuda entre os elementos da equipa.",
        },
        {
          id: "fourth-p-about",
          content:
            "Sou uma pessoa muito dedicada e empenhada em tudo o que faço. Sou perfecionista e exigente comigo mesmo." +
            "Considero-me um aprendiz sem vim: adoro aprender e estarei sempre a aprender. É essa a vida de um programador, certo? Nunca se para de aprender. E se o fizer... É o fim!"
        },
        {
          id: "five-p-about",
          content:
            "Consigo ter uma atitude bastante objetiva, o que me leva a resolver problemas de forma relativamente rápida e focar-me nas prioridades. Sempre gostei de desafios e, por isso, desenvolvi uma boa capacidade de resolução de problemas, sejam eles profissionais ou pessoais.",
        },
      ]
    };
  }

  render() {
    const {language} = this.props
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
                          {language == "EN" ? "Hello, I'm " : "Olá, sou o "}<span className="about_span">Rodrigo</span>.
                        </h5>
                      </div>
                      {language == "EN" ? this.state.about_meEN.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      }) 
                    :
                    this.state.about_mePT.map((content) => {
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
