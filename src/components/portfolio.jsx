import React from "react";
import PortfolioItem from "./portfolio_item.jsx";

const descriptions = {
  NaturalPTrails: (
    <div>
      <p>
        I developed this application while I was in my first internship. It was
        an application made for ICNF - Instituto da Conservação da Natureza e da
        Floresta from Portugal. It took me about 4 months to develop.
      </p>
      <p>
        This application allows users to do some trails from Portugal and see
        Points Of Interest from those trails. You can do those trails by car,
        horse, walk or bicycle.
      </p>
      <p>
        When you start a trail, the application will record how much time you
        take to make that trail, warn you when you go off the trail, and in some
        cases will only let you finish the trail when you are near the end. When
        you end the trail, you will be placed in a rank table that you can visit
        in your profile.
      </p>
      <p>
        You can also comment about the trail and the Points Of Interest. There
        is also a virtual tour for each trail. You can check the weather for
        each trail.
      </p>
      <p>This application is already in PlayStore and AppStore.</p>
    </div>
  ),
  Myticket: (
    <div>
      <p>
        This application was my first big project. It is currently being
        developed by me, but I didn't start it. This project has almost 1 year.
      </p>
      <p>
        The client is the company MyTicket, that presents some services to other
        companies, such as educational vouchers, health vouchers, food cards,
        etc, and those vouchers and cards can only be used within their partners
        network.
      </p>
      <p>
        The main goal of the application is to manage vouchers and food cards
        given to employees by their company. You can also transfer money from
        some cards to anothers.
      </p>
      <p>
        There is also a new feature, that I'm working on, that allows employees
        with an active Mobile Restaurant to order food from some restaurant
        partners of the MyTicket network.
      </p>
      <p>
        The first version of this application is almost in PlayStore and
        AppStore.
      </p>
    </div>
  ),
  PescApanha: (
    <div>
      <p>
        PescApanha was fully developed by me for IPMA - Instituto Português do
        Mar e da Atmosfera.
      </p>
      <p>It's ment to be used for a research that IPMA wants to do.</p>
      <p>
        This application wil be given to fishermen in order to make a research
        on which fish are more caughed by the fishermen and where they are
        caughed.
      </p>
      <p>
        It will also track where the boat were and then send a full report by
        email to IPMA.
      </p>
      <p>
        Since it is a private project, for a research, it will never reach the
        public stores.
      </p>
    </div>
  ),
  Covid2Day: (
    <div>
      <p>This project was created by me.</p>
      <p>
        It was ment to keep track of the evolution of the Covid19 pandemic. I
        used an open source API.
      </p>
      <p>
        I trying to release it to the stores, but Google Play blocked it since
        they think it violates their Policies.
      </p>
    </div>
  ),
  FullStack: (
    <div>
      <p>
        It's a challenge in order to test my skills in Full Stack Development
        using the MERN stack. MERN stands for:
        <ul>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
        </ul>
      </p>
    </div>
  ),
};

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
              description={descriptions.NaturalPTrails}
            />
            <PortfolioItem
              directory="/img/myticket/"
              filename="myticket"
              title="My Ticket"
              text="Android | Java"
              isExtended={false}
              description={descriptions.Myticket}
            />
            <PortfolioItem
              directory="/img/pescapanha/"
              filename="pescapanha"
              title="PescApanha"
              text="Android | Java"
              isExtended={false}
              description={descriptions.PescApanha}
            />
            <PortfolioItem
              directory="/img/covid2day/"
              filename="covid2day"
              title="Covid2Day"
              text="Android | Java"
              isExtended={true}
              description={descriptions.Covid2Day}
            />
            <PortfolioItem
              directory="/img/fullstackchallenge/"
              filename="fullstackchallenge"
              title="Full Stack Challenge"
              text="MongoDB | ExpressJS | ReactJS | NodeJS"
              isExtended={false}
              description={descriptions.FullStack}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
