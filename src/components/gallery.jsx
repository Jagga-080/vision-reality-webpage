import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Home and Appratments</p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {this.props.data ? (
                this.props.data.map((e) => {
                  return (
                    <>
                      <div className="col-sm-4 col-md-3 col-lg-3">
                        <div className="portfolio-item">
                          <div className="hover-bg">
                            {" "}
                            {/* <div className="hover-text">
                              <h4>{e.text}</h4>
                            </div> */}
                            <img
                              src={e.image}
                              className="img-responsive gallery-image"
                              alt="Web App"
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>loading....</>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
