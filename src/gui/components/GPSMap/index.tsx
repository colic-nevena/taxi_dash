import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import markerImg from "../../../static/marker.png";

export interface MapProps {
  data: any[];
}

export const GPSMap = withScriptjs(
  withGoogleMap((props: MapProps) => {
    const bounds = new window.google.maps.LatLngBounds();
    props.data.forEach((vehicle) => {
      if (vehicle.latitude !== 0 && vehicle.longitude !== 0) {
        const latLng = new window.google.maps.LatLng(vehicle.latitude, vehicle.longitude);

        bounds.extend(latLng);
      }
    });

    return (
      <GoogleMap
        defaultZoom={9}
        defaultCenter={{ lat: 43.3209, lng: 21.8954 }}
        defaultOptions={{
          scrollwheel: false
        }}
        options={{
          gestureHandling: "cooperative"
        }}
      >
        {props.data.map((vehicle, index) => {
          return (
            <Marker
              key={index}
              position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
              icon={markerImg}
              
            >
              <InfoWindow>
                <span>{vehicle.licensePlate}</span>
              </InfoWindow>
            </Marker>
          );
        })}
      </GoogleMap>
    );
  })
);
