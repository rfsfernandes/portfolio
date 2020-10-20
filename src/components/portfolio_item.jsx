import React from "react";

function PortfolioItem(props) {
  const directory = process.env.PUBLIC_URL + props.directory;

  const imageNames = [];
  const length = props.isExtended ? 9 : 4;
  for (let index = 1; index < length; index++) {
    imageNames.push(directory + props.filename + index + ".png");
  }

  return (
    <div className="col-md-4">
      <div className="work-box">
        <a
          href={directory + props.filename + ".png"}
          data-lightbox={props.filename}
        >
          <div className="work-img">
            <img
              src={directory + props.filename + ".png"}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title">{props.title}</h2>
                <div className="w-more">
                  <span className="w-ctegory">{props.text}</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="w-like">
                  <span className="ion-ios-plus-outline"></span>
                </div>
              </div>
            </div>
          </div>
        </a>
        {imageNames.map(function (image) {
          return (
            <a
              href={image}
              data-lightbox={props.filename}
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioItem;
