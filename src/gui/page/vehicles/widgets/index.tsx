import {
  AppBar,
  Card,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { RootStore } from "../../../redux/Store";
import { GetVehicles } from "../../../redux/vehicleList/VehicleListActions";
import { useStyles } from "./styles";
import GaugeChart from "react-gauge-chart";
import { VehicleViewModel } from "../../../presenter/vehicle/viewModel/VehicleViewModel";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import vehicleImage from "../../../../static/vehicle.jpg";
import thermoIcon from "../../../../static/celsius.png";

export default function Widgets() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [tabValue, setTabValue] = useState(0);

  const { vehicleList, error, loading } = useSelector(
    (state: RootStore) => state.vehicleListReducer
  );

  useEffect(() => {
    dispatch(GetVehicles());
  }, [dispatch]);

  const handleTabChange = (e: any, tabNumber: number) => setTabValue(tabNumber);

  const titleView = (data: string) => (
    <Grid item xs={12}>
      <Typography variant="body2" className={classes.title}>
        {data}
      </Typography>
    </Grid>
  );

  const tabsView = (
    <Tabs
      value={tabValue}
      onChange={handleTabChange}
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab label="Fuel" className={classes.smallerTab} />
      <Tab label="Meter" className={classes.tab} />
      <Tab label="Temperature" className={classes.tab} />
      <Tab label="Driver's hours" className={classes.tab} />
    </Tabs>
  );

  const fuelView = (percentage: number) => (
    <>
      <GaugeChart
        id={"vehicleId"}
        percent={percentage}
        hideText
        needleColor={"#A7A7A7"}
        needleBaseColor={"#A7A7A7"}
        colors={["#55AA55", "#FFF264", "#F04E36"]}
      />
    </>
  );

  const hoursView = (hours: number) => {
    const percentage = (100 * hours) / 8;

    return (
      <div className={classes.circularBarContainer}>
        <div className={classes.circularBar}>
          <CircularProgressbar
            value={percentage}
            text={hours > 4 ? `needs a break` : `${hours}h`}
            styles={buildStyles({
              pathColor: hours > 4 ? "#F04E36" : "#2CDEA8",
              textColor: hours > 4 ? "#F04E36" : "#2CDEA8",
              textSize: 12,
            })}
          />
        </div>
      </div>
    );
  };

  const imageView = (temperature: number) => (
    <Grid item xs={12}>
      <Grid item xs={12} className={classes.imageDiv}>
        <div className={classes.thermoIconInfo}>
          <img alt="thermometer" src={thermoIcon} width="10%" />
          <Typography
            variant="body2"
            children={temperature}
            className={classes.tempValue}
          />
        </div>
        <img alt="vehicle" src={vehicleImage} className={classes.image} />
      </Grid>
    </Grid>
  );

  const meterView = (money: number) => (
    <div className={classes.meterContainer}>
      <Typography
        variant="body2"
        children={`${money}.00`}
        className={classes.meterValue}
      />
    </div>
  );

  const cardView = (vehicle: VehicleViewModel) => (
    <Card className={classes.cardContainer}>
      <AppBar position="static" color="default" className={classes.appbar}>
        {titleView(vehicle.licensePlate)}
        {tabsView}
      </AppBar>

      {tabValue === 0 && fuelView(vehicle.fuel)}
      {tabValue === 1 && meterView(vehicle.meter)}
      {tabValue === 2 && imageView(vehicle.temperature)}
      {tabValue === 3 && hoursView(4)}
    </Card>
  );

  const mainView = (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {vehicleList.map((vehicle) => (
        <Grid item xs={12} sm={6} md={3} lg={3} key={vehicle.id}>
          {cardView(vehicle)}
        </Grid>
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
