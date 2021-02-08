import React, { Component } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/about";
import Social from "./components/social";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Team from "./components/Team";
import Contact from "./components/contact";
import JsonData from "./data/data.json";

export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Header data={this.state.landingPageData.Header} />
        <Team data={this.state.landingPageData.overview} />
        <About data={this.state.landingPageData.About} />
        <Social />
        <Gallery data={this.state.landingPageData.Portfolio} />
        <Footer />
      </div>
    );
  }
}

export default App;
