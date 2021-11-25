import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export interface MapProps {
    isMarkerShown: boolean;
}

export const GPSMap = withScriptjs(withGoogleMap((props: MapProps) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 43.3209, lng: 21.8954 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 43.3209, lng: 21.8954 }} />}
  </GoogleMap>
));