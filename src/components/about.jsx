import React, { Component } from "react";

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src="https://t3.ftcdn.net/jpg/04/04/20/14/240_F_404201429_Z06dLb2P1NuZYodjE7O8OxQc6c2mSrAr.jpg"
                className="img-responsive"
                alt=""
                style={{ position: "relative", top: "3%" }}
              />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  {this.props.data ? this.props.data.paragraph : "loading..."}
                </p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data
                        ? this.props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data
                        ? this.props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
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

export default about;
