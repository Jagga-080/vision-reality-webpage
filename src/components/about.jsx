import { LocalDining } from "@material-ui/icons";
import React, { Component } from "react";
import Avatar from "react-avatar";
import mainImage from "../assets/images/knowUs.png";
import mainImageBack from "../assets/images/knowUsBack.png";

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3 style={{ marginBottom: "3rem" }}>Why vision reality?</h3>
                <div className="list-style">
                  {this.props.data ? (
                    this.props.data.map((e) => {
                      return (
                        <div
                          style={{
                            display: "flex",

                            margin: "1rem 1rem 3rem 1rem",
                          }}
                        >
                          <img
                            style={{
                              width: "100px",
                              height: "80px",
                              borderRadius: "100%",
                              marginRight: "20px",
                            }}
                            src={e.image}
                          />
                          <div>
                            <p style={{ fontWeight: "bolder" }}>{e.p1}</p>
                            <p>{e.p2}</p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <>loading....</>
                  )}
                </div>
              </div>
            </div>
            <div
              style={{ position: "relative" }}
              className="col-xs-12 col-md-6"
            >
              {" "}
              <img
                src={mainImageBack}
                className="img-responsive about-main-back"
                alt=""
              />
              <div
                className="main-image-about"
                style={{ position: "relative", bottom: "500px", left: "5vw" }}
              >
                <img
                  src={mainImage}
                  className="img-responsive about-main"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
