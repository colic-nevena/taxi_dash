import { Container, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";
import DriverCard from "../../../components/driverCard";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { ConnectMqtt } from "../../../redux/base/BaseActions";
import { GetDrivers } from "../../../redux/driverList/DriverListActions";
import { RootStore } from "../../../redux/Store";
import { useStyles } from "./styles";

export default function DriversIndex() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const { driverList, loading, error } = useSelector(
    (state: RootStore) => state.driverListReducer
  );

  useEffect(() => {
    dispatch(GetDrivers());
    dispatch(ConnectMqtt());
  }, [dispatch]);

  const handleRedirect = (id: string) => navigate(id);

  const driversView = (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      {driverList.map((driver) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={driver.id}>
          <DriverCard
            key={driver.id}
            driver={driver}
            handleRedirect={() => handleRedirect(driver.id)}
          />
        </Grid>
      ))}
    </Grid>
  );

  const viewToRender = (
    <Container disableGutters={true} maxWidth={false} className={classes.root}>  
      <Outlet />
      
      {driversView}
    </Container>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
