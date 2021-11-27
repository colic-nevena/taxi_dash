import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";
import CustomMarker from "./CustomMarker";

export interface MapProps {
  vehicles: VehicleViewModel[];
}

export const GPSMap = withScriptjs(
  withGoogleMap((props: MapProps) => {
    const bounds = new window.google.maps.LatLngBounds();
    props.vehicles.forEach((vehicle) => {
      if (vehicle.latitude !== 0 && vehicle.longitude !== 0) {
        const latLng = new window.google.maps.LatLng(vehicle.latitude, vehicle.longitude);

        bounds.extend(latLng);
      }
    });

    return (
      <GoogleMap
        defaultZoom={9}
        defaultCenter={{ lat: 44.8125, lng: 20.4612 }}
        defaultOptions={{
          scrollwheel: false
        }}
        options={{
          gestureHandling: "cooperative"
        }}
      >
        {props.vehicles.map((vehicle) => (
          <CustomMarker vehicle={vehicle} />
        ))}
      </GoogleMap>
    );
  })
);
