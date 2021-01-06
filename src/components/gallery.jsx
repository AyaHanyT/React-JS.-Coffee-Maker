import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Iced Coffee vs. Cold Brew?</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://www.mrcoffee.com/specialty-brewers/iced-coffee/mr.-coffee-iced-coffeemaker/SAP_2131729.html"
                      title="Project Title"
                      data-lightbox-gallery="gallery1">
                      <div className="hover-text">
                        <h4>Hot, concentrated coffee brewed directly over ice, ready to enjoy in minutes.</h4>
                      </div>
                      <img
                        src="img/portfolio/iced.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="https://www.mrcoffee.com/coffee-makers/view-all/mr.-coffee-5-cup-coffee-maker-25-oz.-mini-brew/SAP_2129512.html"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Coffee grounds steeped in cold water for 12-24 hours.</h4>
                      </div>
                      <img
                        src="img/portfolio/cold.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
                </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Gallery;
