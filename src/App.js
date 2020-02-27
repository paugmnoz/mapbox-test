import React from "react";
import "./App.scss";
import MapPage from "./containers/MapPage";
function App() {
  return (
    <div className="App">
      {
        <MapPage />
        /* 
        <div className='maptool'>
          <span className='weather-icon'>
            <img src='https://image.flaticon.com/icons/svg/2121/2121548.svg' alt=''/>
          </span>
          <h3>Blowing Sand - 01/01/2018</h3>
          <p>nnnnnnnnnnn</p>
        </div>
        */
      }
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
        <article className="light-btn">
          <p>All</p>
        </article>
        <article className="light-btn active">
          <img src="./filter-icons/active/dawn.svg" alt="" />
          <p>Dawn</p>
        </article>
        <article className="light-btn active">
          <img src="./filter-icons/active/daylight.svg" alt="" />
          <p>Daylight</p>
        </article>
        <article className="light-btn active">
          <img src="./filter-icons/active/dusk.svg" alt="" />
          <p>Dusk</p>
        </article>
        <section className="dark-sec">
          <h4>Dark</h4>
          <article className="light-btn active">
            <img src="./filter-icons/active/lighted.svg" alt="" />
            <p>Lighted</p>
          </article>
          <article className="light-btn active">
            <img src="./filter-icons/active/not-lighted.svg" alt="" />
            <p>Not lighted</p>
          </article>
          <article className="light-btn active">
            <img src="./filter-icons/active/unknown-light.svg" alt="" />
            <p>Unknown</p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
