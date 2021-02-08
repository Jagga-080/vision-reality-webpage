import React, { Component } from "react";
import { ArrowForward, ArrowForwardIos } from "@material-ui/icons";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container team-container">
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-4 col-lg-4 col-sm-6 team"
                  >
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <ArrowForwardIos />
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
