import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../../components/ErrorMessage";
import { GPSMap } from "../../../components/GPSMap";
import Loader from "../../../components/Loader";
import MultiSelect from "../../../components/MultiSelect";
import { VehicleViewModel } from "../../../presenter/vehicle/viewModel/VehicleViewModel";
import { RootStore } from "../../../redux/Store";
import { GetVehicles } from "../../../redux/vehicleList/VehicleListActions";
import { useStyles } from "./styles";

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

export default function Map() {
  const { vehicleList, error, loading } = useSelector(
    (state: RootStore) => state.vehicleListReducer
  );
  const [selectedVehicles, setSelectedVehicles] = useState<VehicleViewModel[]>([]);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetVehicles());
  }, [dispatch]);

  const handleChange = (event: any, value: VehicleViewModel[]) =>
    setSelectedVehicles(value);

  const multiSelectView = (
    <Grid item xs={12} md={6} lg={4} xl={4} className={classes.multiSelect}>
      <MultiSelect
        data={vehicleList}
        label={"licensePlate"}
        handleChange={handleChange}
      />
    </Grid>
  );

  const maxHeightDiv = <div className={classes.maxHeightElement} />;
  const containerDiv = <div className={classes.mapContainerElement} />;

  const googleMapView = (
    <Grid item xs={12} md={12} lg={12} className={classes.map}>
      <GPSMap
        googleMapURL={googleMapURL}
        loadingElement={maxHeightDiv}
        containerElement={containerDiv}
        mapElement={maxHeightDiv}
        data={selectedVehicles}
      />
    </Grid>
  );

  const viewToRender = (
    <Container disableGutters={true} maxWidth={false}>
      {multiSelectView}
      {googleMapView}
    </Container>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
