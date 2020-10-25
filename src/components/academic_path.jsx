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

function AcedemicPath() {
  const classes = useStyles();
  return (
    <div>
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="about-me pt-4 pt-md-0">
                  <div className="title-box-2">
                    <h5 className="title-left">
                      Academic <span class="about_span">Path</span>.
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
                            Degree in Computer Engineering
                          </Typography>
                          <Typography>
                            Computer Engineering Degree from Instituto
                            Politécnico de Beja, at Escola de Tecnologias E
                            Gestão.
                          </Typography>
                        </Paper>
                        <TimelineContent>
                          <Typography variant="body2" color="textSecondary">
                            2019 - Current
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
                            The Complete 2020 Web Development Bootcamp
                          </Typography>
                          <Typography>
                            A 54h Fullstack bootcamp from Udemy, instructed by
                            Angela Yu, one of the bests instructors. I learned
                            about MongoDB, ExpressJS, ReactJS and NodeJS.
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
                            The Complete App Design Course - UX, UI and Design
                            Thinking
                          </Typography>
                          <Typography>
                            A course where I learned about UI, UX and Design, at
                            Udemy with the instructor Angela Yu. Since it was
                            one of my weaknesses, I took this course in order to
                            improve myself and to open my mind a bit more.
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
                            Professional Technical Course - Web Technologies and Mobile Devices
                          </Typography>
                          <Typography>
                            A course specially made to prepare student for the professional World from Instituto
                            Politécnico de Beja, at Escola de Tecnologias E
                            Gestão.. 
                            I learned how to configure servers, create and manage databases, API's development, web applications development
                            and mobile applications development.
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
    </div>
  );
}

export default AcedemicPath;
