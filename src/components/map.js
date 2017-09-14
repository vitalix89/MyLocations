import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import HeaderMap from "./headerMap";

import {
  GoogleMapLoader,
  GoogleMap,
  Marker,
  withGoogleMap
} from "react-google-maps";
import { OverlayView } from "react-google-maps";
const GoogleMapsAPI = window.google.maps;

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    // defaultCenter={this.props.coords}

    center={{ lat: props.coords.lat, lng: props.coords.lng }}
    options={{ streetViewControl: false, mapTypeControl: false }}
  >
    <Marker position={{ lat: props.coords.lat, lng: props.coords.lng }} />
    {console.log("MAAAAPPP PROP", props)}
    <OverlayView
      style={{ backgroundColor: "#fff" }}
      position={new GoogleMapsAPI.LatLng(32.109333, 34.855499)}
      mapPaneName={OverlayView.MARKER_LAYER}
    >
      <p>Some content</p>
    </OverlayView>
  </GoogleMap>
));

class Map extends Component {
  componentWillMount() {}
  loaded() {
    console.log("loaded");
  }
  render() {
    const mapContainer = <div style={{ height: "100%", width: "100%" }} />;
    return (
      <div
        style={{
          height: "92%",
          width: "100%",
          position: "absolute",
          top: "2px",
          left: "0"
        }}
      >
        <HeaderMap />

        <GettingStartedGoogleMap
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMapLoad={this.loaded}
          onMapClick={this.loaded}
          markers={{ lat: 0, lng: 0 }}
          onMarkerRightClick={this.loaded}
          coords={this.props.coords}
        />

      </div>
    );
  }
}

export default connect(
  state => ({
    coords: state.coords
  }),
  null
)(Map);
