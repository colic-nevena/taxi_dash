import React from "react";
import { InfoWindow, Marker } from "react-google-maps";
import markerImg from "../../../static/marker.png";
import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";

export interface MarkerProps {
  vehicle: VehicleViewModel;
}

export default function CustomMarker(props: MarkerProps) {
  const { vehicle } = props;
  return (
    <Marker
      key={vehicle.licensePlate}
      position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
      icon={markerImg}
    >
      <InfoWindow>
        <span>{vehicle.licensePlate}</span>
      </InfoWindow>
    </Marker>
  );
}
