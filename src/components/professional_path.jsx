import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";

import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import digitalworks from "../img/digitalworks.png";
import aquashow from "../img/aquashow.png";
import continent from "../img/continente.jpg";
import eventphotography from "../img/eventphotography.png";
import tekever from "../img/tekever.png";
import Slide from "@material-ui/core/Slide";
const useStyles = makeStyles((theme) => ({
  paper: {
    color: "white",
    background: "#00adb5",
    padding: "16px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  customDot: {
    background: "#00adb5",
    borderColor: "#00adb5",
  },
  paperImg: {
    textAlign: "center",
  },
}));

function ProfessionalPath(props) {
  const { language } = props;
  const classes = useStyles();
  return (
    <div>
      <Slide in {...{ timeout: 3500 }}>
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        {language == "EN" ? "Professional " : "Percurso "}
                        <span className="about_span">
                          {language == "EN" ? "Path" : "Profissional"}
                        </span>
                        .
                      </h5>
                    </div>
                    <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                src={tekever}
                                alt=""
                                width="100px"
                                height="100px"
                              />
                            </div>
                            <Typography
                              align="center"
                              variant="h6"
                              component="h1"
                            >
                              "Lead Android Developer"
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Android team leader. In charge of leading the development of a modular iGaming application on the Android platform, where I set priorities and distributed tasks among team members."
                                : "Líder da equipa de Android. Encarregue de liderar o desenvolvimento de uma aplicação modular de iGaming na plataforma Android, onde defini prioridades e distribuí tarefas pelos membros da equipa"}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2021 - {language == "EN" ? "current" : "até ao momento"}
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                src={tekever}
                                alt=""
                                width="100px"
                                height="100px"
                              />
                            </div>
                            <Typography
                              align="center"
                              variant="h6"
                              component="h1"
                            >
                              {language == "EN"
                                ? "Android Developer"
                                : "Desenvolvedor Android"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Android Developer in the project Santander Empresas."
                                : "Desenvolvedor Android no projeto Santander Empresas."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2021 - 2021
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                src={digitalworks}
                                alt=""
                                width="100px"
                                height="100px"
                              />
                            </div>
                            <Typography
                              align="center"
                              variant="h6"
                              component="h1"
                            >
                              {language == "EN"
                                ? "Junior Android Developer"
                                : "Desenvolvedor Android Júnior"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Once I finished my trainee internship, I became a Junior Android Developer in the same company I did all the internships."
                                : "Assim que terminei meu estágio curricular, tornei-me Desenvolvedor Android Júnior na mesma empresa em que fiz todos os estágios anterior."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2020 - 2021
                            
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                src={digitalworks}
                                alt=""
                                width="100px"
                                height="100px"
                              />
                            </div>
                            <Typography
                              align="center"
                              variant="h6"
                              component="h1"
                            >
                              {language == "EN"
                                ? "Professional Internship - Android Developer"
                                : "Estágio Profissional - Desenvolvedor Android"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "As I finished my University course, I began a trainee internship as Android Developer in the same company I did my internship."
                                : "Ao terminar o meu curso universitário, iniciei um estágio profissional como Desenvolvedor Android na mesma empresa em que fiz meu estágio curricular."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2019 - 2020
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                src={digitalworks}
                                alt=""
                                width="100px"
                                height="100px"
                              />
                            </div>
                            <Typography
                              align="center"
                              variant="h6"
                              component="h1"
                            >
                              {language == "EN"
                                ? "Curricular Internship - Android Developer"
                                : "Estágio Curricular - Desenvolvedor Android"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "In order to finish my University course, I needed to make an internship. I chose to make an internship as an Android Developer at Digital Workd."
                                : "Para terminar meu CTeSP, precisei de fazer um estágio curricular. Optei por fazer um estágio como Desenvolvedor Android, na Digital Works."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2019
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                src={continent}
                                alt=""
                                width="100px"
                                height="100px"
                              />
                            </div>
                            <Typography
                              align="center"
                              variant="h6"
                              component="h1"
                            >
                              {language == "EN"
                                ? "Supermarket Product Repositor"
                                : "Repositor de Supermercado"}
                            </Typography>
                            <Typography>
                              {language == "eN"
                                ? "Worked as a product repositor for 6 months at Continente. I was also studying at the sametime."
                                : "Trabalhei como repositor de produtos durante 6 meses no Continente. Trabalhava e estudava ao mesmo tempo."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2018
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                src={aquashow}
                                alt=""
                                width="100px"
                                height="100px"
                              />
                            </div>
                            <Typography
                              align="center"
                              variant="h6"
                              component="h1"
                            >
                              {language == "EN"
                                ? "Restaurant Employee At Water Themed Park"
                                : "Empregado de Restaurante Num Parque Aquático"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Worked at a Water Themed Park, called Aquashow, as cook and also as barista."
                                : "Trabalhei num Parque Temático Aquático, denominado Aquashow, como cozinheiro e também como barista."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2016
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                src={eventphotography}
                                alt=""
                                width="100px"
                                style={{ backgroundColor: "white" }}
                              />
                            </div>
                            <Typography
                              align="center"
                              variant="h6"
                              component="h1"
                            >
                              {language == "EN"
                                ? "Events Photographer"
                                : "Fotógrafo de Eventos"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Worked as an event photographer at some parties made by local students."
                                : "Trabalhei como fotógrafo de eventos em algumas festas realizadas por estudantes locais."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2015 - 2017
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slide>
    </div>
  );
}

export default ProfessionalPath;
