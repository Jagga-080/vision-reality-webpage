import { Button } from "@material-ui/core";
import React from "react";
import socialLogo from "../assets/images/socialLogo.png";
import play from "../assets/images/playStore.png";
import appStore from "../assets/images/appStore.png";

function social() {
  return (
    <div className="social-new container">
      <div className="social-new-div row">
        <img
          style={{ width: "200px", height: "100px", marginBottom: "2rem" }}
          className="social-logo"
          src={socialLogo}
        />
        <h2>Download Vision Reality in your Phone</h2>
        <h4 className="text-muted">Available on Google Play and App Store</h4>
        <div className="social-new-button">
          <Button>
            <img style={{ cursor: "pointer" }} src={play} />
          </Button>
          <Button>
            <img style={{ cursor: "pointer" }} src={appStore} />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default social;
