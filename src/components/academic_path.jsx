import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import udemy from "../img/udemy.png";
import ipb from "../img/ipb.png";
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

function AcedemicPath(props) {
  const { language } = props;
  const classes = useStyles();
  return (
    <div>
      <Slide in {...{ timeout: 3000 }}>
        <section id="my-path" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        {language == "EN" ? "Academic " : "Percurso "}{" "}
                        <span className="about_span">
                          {language == "EN" ? "Path" : "Académico"}
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
                                src={ipb}
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
                                ? "Degree in Computer Engineering"
                                : "Licenciatura em Engenharia Informática"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Computer Engineering Degree from Instituto Politécnico de Beja, at Escola de Tecnologia E Gestão."
                                : "Licenciatura em Engenharia Informática no Instituto Politécnico de Beja na Escola de Tecnologia E Gestão"}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2019 -{" "}
                              {language == "EN" ? "Current" : "A decorrer"}
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
                                src={udemy}
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
                                ? "The Complete 2020 Web Development Bootcamp"
                                : "Bootcamp completo de Desenvolvimento Web de 2020"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "A 54h Fullstack bootcamp from Udemy, instructed by Angela Yu, one of the bests instructors. I learned about MongoDB, ExpressJS, ReactJS and NodeJS."
                                : "Um bootcamp Fullstack de 54h da Udemy, instruído pela Angela Yu, uma das melhores instrutoras da plataforma. Aprendi MongoDB, ExpressJS, ReactJS e NodeJS."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2020
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
                                src={udemy}
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
                                ? "The Complete App Design Course - UX, UI and Design Thinking"
                                : "Curso Completo de Design de Aplicações - UX, UI e Pensamento de Design"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "A course where I learned about UI, UX and Design, at Udemy with the instructor Angela Yu. Since it was one of my weaknesses, I took this course in order to improve myself and to open my mind a bit more."
                                : "Um curso onde aprendi sobre UI, UX e Design, na Udemy com a instrutora Angela Yu. Por ser um dos meus pontos fracos, fiz este curso com o objetivo de melhorar essa minha fraquesa e abrir um pouco mais a minha mente."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2020
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
                                src={ipb}
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
                                ? "Professional Technical Course - Web Technologies and Mobile Devices"
                                : "Curso Técnico Superior Profissional - Tecnologias Web e Dispositivos Móveis"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "A course specially made to prepare student for the professional World from Instituto Politécnico de Beja, at Escola de Tecnologias E Gestão.. I learned how to configure servers, create and manage databases, API's development, web applications development and mobile applications development."
                                : "Um curso feito especialmente para preparar os alunos para o mundo profissional, do Instituto Politécnico de Beja, na Escola de Tecnologias E Gestão. Aprendi a configurar servidores, criar e gerir bases de dados, desenvolvimento de API's, desenvolvimento de aplicações web e desenvolvimento de aplicações mobile."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2017 - 2019
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

export default AcedemicPath;
