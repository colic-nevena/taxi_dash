import { Grid, Typography, Card, AppBar, Tabs, Tab } from "@material-ui/core";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import GaugeChart from "react-gauge-chart";
import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";
import { useStyles } from "./styles";
import "react-circular-progressbar/dist/styles.css";
import vehicleImage from "../../../static/vehicle.jpg";
import thermoIcon from "../../../static/celsius.png";

const mqtt = require("mqtt");
const connectionOptions = {
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
};

export interface VehicleWidgetProps {
  vehicle: VehicleViewModel;
}

export default function VehicleWidget(props: VehicleWidgetProps) {
  const classes = useStyles();
  const { vehicle } = props;

  const [tabValue, setTabValue] = useState(0);
  const [client, setClient] = useState<any>();
  const [fuelPayload, setFuelPayload] = useState(vehicle.fuel);
  const [meterPayload, setMeterPayload] = useState(vehicle.meter);
  const [temperaturePayload, setTemperaturePayload] = useState(
    vehicle.temperature
  );

  useEffect(() => {
    setClient(mqtt.connect("ws://broker.emqx.io:8083/mqtt", connectionOptions));
  }, []);

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        console.log("Mqtt Connected");
      });

      client.on("error", (err: any) => {
        console.error("Connection error: ", err);
        client.end();
      });

      client.on("reconnect", () => {
        console.log("Mqtt error: Reconnecting");
      });

      client.subscribe(`${vehicle.id}/fuel`);
      client.subscribe(`${vehicle.id}/meter`);
      client.subscribe(`${vehicle.id}/temperature`);
      client.subscribe(`${vehicle.id}/driversHours`);

      client.on("message", (topic: any, message: any) => {
        const topicSensor = topic.slice(topic.indexOf("/") + 1);
        if (topicSensor === "fuel") setFuelPayload(Number(message));
        if (topicSensor === "meter") setMeterPayload(Number(message));
        if (topicSensor === "temperature")
          setTemperaturePayload(Number(message));
      });
    }
  }, [client, vehicle.id]);

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
      percent={fuelPayload}
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

  const temperatureView = (
    <Grid item xs={12}>
      <Grid item xs={12} className={classes.imageDiv}>
        <div className={classes.thermoIconInfo}>
          <img alt="thermometer" src={thermoIcon} width="10%" />
          <Typography
            variant="body2"
            children={temperaturePayload}
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
        children={`${meterPayload}.00`}
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
      {tabValue === 2 && temperatureView}
      {tabValue === 3 && hoursView(4)}
    </Card>
  );

  return (
    <Grid item xs={12} sm={6} md={3} lg={3} key={vehicle.id}>
      {cardView}
    </Grid>
  );
}
