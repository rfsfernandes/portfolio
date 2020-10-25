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
import digitalworks from "../img/digitalworks.png";
import aquashow from "../img/aquashow.png";
import continent from "../img/continente.jpg";
import eventphotography from "../img/eventphotography.png";

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

function ProfessionalPath() {
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
                      Professional <span class="about_span">Path</span>.
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
                            Junior Android Developer
                          </Typography>
                          <Typography>
                            Once I finished my trainee internship, I became a
                            Junior Android Developer in the same company I did
                            all the internships.
                          </Typography>
                        </Paper>
                        <TimelineContent>
                          <Typography variant="body2" color="textSecondary">
                            2020 - current
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
                            Trainee Android Developer
                          </Typography>
                          <Typography>
                            As I finished my University course, I began a
                            trainee internship as Android Developer in the same
                            company I did my internship.
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
                            Internship - Android Developer
                          </Typography>
                          <Typography>
                            In order to finish my University course, I needed to
                            make an internship. I chose to make an internship as
                            an Android Developer.
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
                            Supermarket Product Repositor
                          </Typography>
                          <Typography>
                            Worked as a product repositor for 6 months in
                            Continente. That I was also studying at the same
                            time.
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
                            Restaurant Employee At Water Themed Park
                          </Typography>
                          <Typography>
                            Worked at a Water Themed Park, called Aquashow, as
                            cook and also as barista.
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
                            Events Photographer
                          </Typography>
                          <Typography>
                            Worked as an event photographer at some parties make
                            by local students.
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
    </div>
  );
}

export default ProfessionalPath;
