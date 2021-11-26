import React from "react";
import { InfoWindow, Marker } from "react-google-maps";
import markerImg from "../../../static/marker.jpg";

export interface MarkerProps {
  data: any[];
}

export default function Markers(props: MarkerProps) {
  const { data } = props;

  return data.map((vehicle, index) => {
    return (
      <Marker
        key={index}
        position={{ lat: vehicle.lat, lng: vehicle.lng }}
        icon={markerImg}
      >
        <InfoWindow
        // onCloseClick={props.handleShowName(bus.license)}
        >
          <span>{vehicle.licensePlate}</span>
        </InfoWindow>
      </Marker>
    );
  });
}
