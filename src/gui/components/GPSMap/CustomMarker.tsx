import React, { useEffect, useState } from "react";
import { InfoWindow, Marker } from "react-google-maps";
import { useSelector } from "react-redux";
import markerImg from "../../../static/marker.png";
import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";
import { RootStore } from "../../redux/Store";

export interface MarkerProps {
  vehicle: VehicleViewModel;
}

export default function CustomMarker(props: MarkerProps) {
  const { vehicle } = props;

  const { mqttClient } = useSelector((state: RootStore) => state.baseReducer);

  const [latitude, setLatitude] = useState(vehicle.latitude);
  const [longitude, setLongitude] = useState(vehicle.longitude);

  useEffect(() => {
    if (mqttClient) {
      mqttClient.setMaxListeners(0);

      mqttClient.on("connect", () => {
        console.log("Mqtt Connected");
      });

      mqttClient.on("error", (err: any) => {
        console.error("Connection error: ", err);
        mqttClient.end();
      });

      mqttClient.on("reconnect", () => {
        console.log("Mqtt error: Reconnecting");
      });

      mqttClient.subscribe(`${vehicle.id}/coordinates`);

      mqttClient.on("message", (topic: any, message: any) => {
        const topicId = topic.slice(0, topic.indexOf("/"));

        if (topicId === vehicle.id) {
          const coordinates = message.toString();
          const lat = coordinates.slice(0, coordinates.indexOf(","));
          const lng = coordinates.slice(coordinates.indexOf(",") + 1);

          setLatitude(Number(lat.trim()));
          setLongitude(Number(lng.trim()));
        }
      });
    }
  }, [mqttClient, vehicle.id]);

  return (
    <Marker
      key={vehicle.licensePlate}
      position={{ lat: latitude, lng: longitude }}
      icon={markerImg}
    >
      <InfoWindow>
        <span>{vehicle.licensePlate}</span>
      </InfoWindow>
    </Marker>
  );
}
