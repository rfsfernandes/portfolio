import React from "react";
import PortfolioItem from "./portfolio_item.jsx";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Some projects I worked on</h3>
                <p className="subtitle-a">
                  This projects were made wether in a professional contex,
                  University or by my own.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <PortfolioItem
              directory="/img/icnf/"
              filename="icnf"
              title="NaturalPTrails"
              text="Android | Java"
              isExtended={true}
            />
            <PortfolioItem
              directory="/img/myticket/"
              filename="myticket"
              title="My Ticket"
              text="Android | Java"
              isExtended={false}
            />
            <PortfolioItem
              directory="/img/pescapanha/"
              filename="pescapanha"
              title="PescApanha"
              text="Android | Java"
              isExtended={false}
            />
            <PortfolioItem
              directory="/img/covid2day/"
              filename="covid2day"
              title="Covid2Day"
              text="Android | Java"
              isExtended={true}
            />
            <PortfolioItem
              directory="/img/fullstackchallenge/"
              filename="fullstackchallenge"
              title="Full Stack Challenge"
              text="MongoDB | ExpressJS | ReactJS | NodeJS"
              isExtended={false}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
