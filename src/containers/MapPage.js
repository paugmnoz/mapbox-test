import React, { Component } from "react";
import "./_MapPage.scss";
import mapdot from './../mapdot.png'
export default class MapPage extends Component {
  
  map = {
  }
  componentDidMount() {
    const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

    mapboxgl.accessToken =
      "pk.eyJ1IjoicGF1Z21ub3oiLCJhIjoiY2s1bW1sNWs3MTFncTNwbzcxZDJrOGljaSJ9.8W7iPx4WEGe2t7egTw7xvg";
    this.map = new mapboxgl.Map({
      container: "map-cont",
      style: this.props.mapStyle,
      center: [-96.95977, 32.8047],
      zoom: 9.02,
      pitch: 31.0,
      bearing: -12.8
    });

    this.onMapLoad(this.map, mapboxgl);
  }

  componentDidUpdate() {
    this.map.setStyle(this.props.mapStyle);
  }

  onMapLoad(map, mapboxgl) {
    map.on("load", function() {
      const data = {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                icon: "mapdot",
                iconSize: [40,40]
              },
              geometry: {
                type: "Point",
                coordinates: [-96.78886, 32.77894]
              }
            }
          ]
        }
      }

      map.addSource("places", data);

      map.loadImage(
        mapdot, (error, image) => {
          map.addImage('cat', image);
        })
      // Add a layer showing the places.
      map.addLayer({
        id: "places",
        type: "symbol",
        source: "places",
        layout: {
          "icon-image": "cat",
          "icon-allow-overlap": true
        }
      });

      map.on("click", "places", function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            `
        <div className="mapPopup">
          <span className="weather-icon">
            <img src="./weather-icons/blowing-dirt.svg" alt="" />
          </span>
          <h3>Blowing Sand - 01/01/2018</h3>
          <p className="severity">
            <span className="bold highlight"> Severity: </span> Unknown
          </p>
          <span className="flex row">
            <p>
              <span className="bold"> Injuries: </span> 0
            </p>
            <p>
              <span className="bold"> Fatalities: </span> 1
            </p>
          </span>
          <p className="bold"> Factors:</p>
          <ul>
            <li>Failed To Drive In Single Lane</li>
            <li>Failed To Control Speed.</li>
          </ul>
        </div>
            `
          )
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on("mouseenter", "places", function() {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "places", function() {
        map.getCanvas().style.cursor = "";
      });
    });
  }

  render() {
    return <div id="map-cont"></div>;
  }
}
