import { Grid, Typography } from "@material-ui/core";
import { DriverViewModel } from "../../presenter/driver/viewModel/DriverViewModel";
import { useStyles } from "./styles";
import driverImage from "../../../static/taxi-driver.jpg";
import { Card } from "@material-ui/core";

interface DriverCardProps {
  driver: DriverViewModel;
  handleRedirect: () => void;
}

export default function DriverCard(props: DriverCardProps) {
  const { driver, handleRedirect } = props;
  const classes = useStyles();

  const titleView = (
    <Grid item xs={12}>
      <Typography variant="h6" className={classes.title}>
        {driver.firstName} {driver.lastName}
      </Typography>
    </Grid>
  );

  const imageView = (
    <Grid item xs={12}>
      <Grid item xs={12} className={classes.imageDiv}>
        <img alt="driver" src={driverImage} className={classes.image} />
      </Grid>
    </Grid>
  );

  const statusView = (
    <Grid item xs={12} className={classes.statusContainer}>
      <Typography
        variant="subtitle2"
        className={
          driver.status === "active"
            ? classes.statusActive
            : driver.status === "break"
            ? classes.statusBreak
            : classes.statusNotWorking
        }
      >
        ● {driver.status}
      </Typography>
    </Grid>
  );

  const viewToRender = (
    <Card className={classes.root} onClick={handleRedirect}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {titleView}
        {imageView}
        {statusView}
      </Grid>
    </Card>
  );

  return viewToRender;
}
