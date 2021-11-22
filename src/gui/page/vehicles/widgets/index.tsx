import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { RootStore } from "../../../redux/Store";
import { GetVehicles } from "../../../redux/vehicleList/VehicleListActions";
import { useStyles } from "./styles";
import "react-circular-progressbar/dist/styles.css";
import VehicleWidget from "../../../components/vehicleWidget";

export default function Widgets() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { vehicleList, error, loading } = useSelector(
    (state: RootStore) => state.vehicleListReducer
  );

  useEffect(() => {
    dispatch(GetVehicles());
  }, [dispatch]);

  const mainView = (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {vehicleList.map((vehicle) => (
        <VehicleWidget vehicle={vehicle} key={vehicle.id} />
      ))}
    </Grid>
  );

  const viewToRender = (
    <Container disableGutters={true} maxWidth={false} className={classes.root}>
      {mainView}
    </Container>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
