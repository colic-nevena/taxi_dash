import { Grid, Typography, Card, AppBar, Tabs, Tab } from "@material-ui/core";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import GaugeChart from "react-gauge-chart";
import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";
import { useStyles } from "./styles";
import "react-circular-progressbar/dist/styles.css";
import vehicleImage from "../../../static/vehicle.jpg";
import thermoIcon from "../../../static/celsius.png";

export interface VehicleWidgetProps {
  vehicle: VehicleViewModel;
}

export default function VehicleWidget(props: VehicleWidgetProps) {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const { vehicle } = props;

  const handleTabChange = (e: any, tabNumber: number) => setTabValue(tabNumber);

  const titleView = (
    <Grid item xs={12}>
      <Typography variant="body2" className={classes.title}>
        {vehicle.licensePlate}
      </Typography>
    </Grid>
  );

  const fuelView = (
    <GaugeChart
      id={vehicle.id}
      percent={vehicle.fuel}
      hideText
      needleColor={"#A7A7A7"}
      needleBaseColor={"#A7A7A7"}
      colors={["#55AA55", "#FFF264", "#F04E36"]}
    />
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

  const imageView = (
    <Grid item xs={12}>
      <Grid item xs={12} className={classes.imageDiv}>
        <div className={classes.thermoIconInfo}>
          <img alt="thermometer" src={thermoIcon} width="10%" />
          <Typography
            variant="body2"
            children={vehicle.temperature}
            className={classes.tempValue}
          />
        </div>
        <img alt="vehicle" src={vehicleImage} className={classes.image} />
      </Grid>
    </Grid>
  );

  const meterView = (
    <div className={classes.meterContainer}>
      <Typography
        variant="body2"
        children={`${vehicle.meter}.00`}
        className={classes.meterValue}
      />
    </div>
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

  const cardView = (
    <Card className={classes.cardContainer}>
      <AppBar position="static" color="default" className={classes.appbar}>
        {titleView}
        {tabsView}
      </AppBar>

      {tabValue === 0 && fuelView}
      {tabValue === 1 && meterView}
      {tabValue === 2 && imageView}
      {tabValue === 3 && hoursView(4)}
    </Card>
  );

  return (
    <Grid item xs={12} sm={6} md={3} lg={3} key={vehicle.id}>
      {cardView}
    </Grid>
  );
}
