import React, { Component } from "react";
import "./App.scss";
import MapPage from "./containers/MapPage";
import CircleType from 'circletype'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "mapbox://styles/paugmnoz/ck6wpmuxt0v4i1it6mxplyle5",
      allActive: true
    };
  }
  componentDidMount(){
    console.log( document.getElementById("floatCircleText"))
    const circleText = new CircleType(document.getElementById("floatCircleText"));
    circleText.dir(-1)
    .radius(65)
  }
  changeStyle(style, event) {
    const btns = document.getElementsByClassName("light-btn");

    if (event.currentTarget.id === "all-btn") {
      Object.values(btns).forEach(e => {
        e.classList.add("active");
      });
      this.setState({
        allActive: true
      });
    } else {
      Object.values(btns).forEach(e => {
        e.classList.remove("active");
      });
      event.currentTarget.classList.add("active");
      console.log('Child',  Object.values(event.currentTarget.children)[0])
      this.setState({
        allActive: false
      });
    }

    let configStyle = "mapbox://styles/paugmnoz/" + style;
    this.setState({
      style: configStyle
    });
  }
  render() {
    return (
      <div className="App">
        <MapPage mapStyle={this.state.style} />
        <div id="map-title">
          <span className="title-texts">
            <h2>Traffic Accidents Hotspots</h2>
            <h4>Dallas and Fort Worth</h4>
          </span>
          <span className="accidents-text">
            <p>TOTAL ACCIDENTS</p>
            <h1>32506</h1>
          </span>
        </div>
        <div id="light-menu">
          <h4>Light conditions</h4>
          <article
            id="all-btn"
            className="light-btn active"
            onClick={e => this.changeStyle("ck6wpmuxt0v4i1it6mxplyle5", e)}
          >
            <p>All</p>
          </article>
          <article
            className="light-btn active"
            onClick={e => this.changeStyle("ck759xrao0djd1ippru4diusr", e)}
          >
            <img
              src={
                this.state.allActive
                  ? "./filter-icons/active/dawn.svg"
                  : "./filter-icons/disabled/dawn.svg"
              }
              alt=""
            />
            <p>Dawn</p>
          </article>
          <article
            className="light-btn active"
            onClick={e => this.changeStyle("ck75an5yx1vtd1ikpu9x21glf", e)}
          >
            <img src="./filter-icons/active/daylight.svg" alt="" />
            <p>Daylight</p>
          </article>
          <article
            className="light-btn active"
            onClick={e => this.changeStyle("ck75af3ax10p81ilekna2gcoc", e)}
          >
            <img src="./filter-icons/active/dusk.svg" alt="" />
            <p>Dusk</p>
          </article>
          <section className="dark-sec">
            <h4>Dark</h4>
            <article
              className="light-btn dark active"
              onClick={e => this.changeStyle("lighted", e)}
            >
              <img src="./filter-icons/active/lighted.svg" alt="" />
              <p>Lighted</p>
            </article>
            <article
              className="light-btn dark active"
              onClick={e => this.changeStyle("nolighted", e)}
            >
              <img src="./filter-icons/active/not-lighted.svg" alt="" />
              <p>Not lighted</p>
            </article>
            <article
              className="light-btn dark active"
              onClick={e => this.changeStyle("dark", e)}
            >
              <img src="./filter-icons/active/unknown-light.svg" alt="" />
              <p>Unknown</p>
            </article>
          </section>
        </div>
        <div id="mobile-light-menu">
          <h4 className="title">Light conditions</h4>
          <div className="btns-cont">
            <article
              id="all-btn-mob"
              className="light-btn mobile active"
              onClick={e => this.changeStyle("ck6wpmuxt0v4i1it6mxplyle5", e)}
            >
              <p>All</p>
            </article>
            <article
              className="light-btn mobile active"
              onClick={e => this.changeStyle("ck759xrao0djd1ippru4diusr", e)}
            >
              <img
                src={
                  this.state.allActive
                    ? "./filter-icons/active/dawn.svg"
                    : "./filter-icons/disabled/dawn.svg"
                }
                alt=""
                className="icon"
              />
              <p>Dawn</p>
            </article>
            <article
              className="light-btn mobile active"
              onClick={e => this.changeStyle("ck75an5yx1vtd1ikpu9x21glf", e)}
            >
              <img src="./filter-icons/active/daylight.svg" alt="" />
              <p>Daylight</p>
            </article>
            <article
              className="light-btn mobile active"
              onClick={e => this.changeStyle("ck75af3ax10p81ilekna2gcoc", e)}
            >
              <img src="./filter-icons/active/dusk.svg" alt="" />
              <p>Dusk</p>
            </article>
            <section className="dark-sec mobile">
              <h4>Dark:</h4>
              <article
                className="light-btn mobile dark active"
                onClick={e => this.changeStyle("lighted", e)}
              >
                <img src="./filter-icons/active/lighted.svg" alt="" />
                <p>Lighted</p>
              </article>
              <article
                className="light-btn mobile dark active"
                onClick={e => this.changeStyle("nolighted", e)}
              >
                <img src="./filter-icons/active/not-lighted.svg" alt="" />
                <p>Not lighted</p>
              </article>
              <article
                className="light-btn mobile dark active"
                onClick={e => this.changeStyle("dark", e)}
              >
                <img src="./filter-icons/active/unknown-light.svg" alt="" />
                <p>Unknown</p>
              </article>
            </section>
          </div>
        </div>
        <div id="actual-light" className="float-btn">
        <img
              src={
                this.state.allActive
                  ? "./filter-icons/active/dawn.svg"
                  : "./filter-icons/disabled/dawn.svg"
              }
              alt=""
            />
          <p id="floatCircleText" className="bold">Dawn</p>
        </div>
        <div id="actual-hour" className="float-btn">
        <img
              src={
                this.state.allActive
                  ? "./filter-icons/active/dawn.svg"
                  : "./filter-icons/disabled/dawn.svg"
              }
              alt=""
            />
          <p id="floatCircleText" className="bold">All</p>
        </div>
      </div>
    );
  }
}
