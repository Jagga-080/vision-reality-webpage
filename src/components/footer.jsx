import React from "react";

function footer() {
  return (
    <>
      <div id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="footer-links">
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  Delivery Service
                </a>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  Assembly Service
                </a>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  Customer Service
                </a>
                <a
                  href="#contact"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Contact Us
                </a>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  near me
                </a>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  careers
                </a>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  Gift Cards
                </a>
              </div>
              <div className="horizontal-line"></div>
              <div className="furthur-content">
                <h3>Serving In</h3>
                <div className="container">
                  <div className="footer-country row">
                    <h4>Australia</h4>
                    <div className="footer-city col-sm-12 col-lg-12 col-md-12">
                      <span style={{ color: "black" }}>Sydney</span>
                      <span style={{ color: "black" }}>Albury</span>
                      <span style={{ color: "black" }}>Queensland</span>
                      <span style={{ color: "black" }}>Hobart</span>
                      <span style={{ color: "black" }}>Darwin</span>
                      <span style={{ color: "black" }}>Canberra</span>
                      <span style={{ color: "black" }}>Perth</span>
                      <span style={{ color: "black" }}>Melbourne</span>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="footer-country row">
                    <h4>UAE</h4>
                    <div className="footer-city col-sm-12 col-lg-12 col-md-12">
                      <span style={{ color: "black" }}>Abu DHabi</span>
                      <span style={{ color: "black" }}>Dubai</span>
                      <span style={{ color: "black" }}>Sharjah</span>
                      <span style={{ color: "black" }}>Ajman</span>
                      <span style={{ color: "black" }}>Al AIn</span>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="footer-country row">
                    <h4>USA</h4>
                    <div className="footer-city col-sm-12 col-lg-12 col-md-12">
                      <span style={{ color: "black" }}>New York</span>
                      <span style={{ color: "black" }}>Los Angeles</span>
                      <span style={{ color: "black" }}>Chicago</span>
                      <span style={{ color: "black" }}>Houston</span>
                      <span style={{ color: "black" }}>Philadelphia</span>
                      <span style={{ color: "black" }}>San Diego</span>
                      <span style={{ color: "black" }}>Washington</span>
                      <span style={{ color: "black" }}>Boston</span>
                      <span style={{ color: "black" }}>Oklahoma City</span>
                      <span style={{ color: "black" }}>Las vegas</span>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="footer-country row">
                    <h4>Mexico</h4>
                    <div className="footer-city col-sm-12 col-lg-12 col-md-12">
                      <span style={{ color: "black" }}>Mexico city</span>
                      <span style={{ color: "black" }}>Ecatepec</span>
                      <span style={{ color: "black" }}>Guadalajra</span>
                      <span style={{ color: "black" }}>Puebla city</span>
                      <span style={{ color: "black" }}>Philadelphia</span>
                      <span style={{ color: "black" }}>Ciudad Juarez</span>
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "2px solid white" }}></div>
              </div>
              <div className="container text-center">
                {/* <p>&copy; 2020</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
