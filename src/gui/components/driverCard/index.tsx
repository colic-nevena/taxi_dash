import { Grid, Typography } from "@material-ui/core";
import { DriverViewModel } from "../../presenter/driver/viewModel/DriverViewModel";
import { useStyles } from "./styles";
import { Card } from "@material-ui/core";
import driverImage from "../../../static/taxi-driver.jpg";

interface DriverCardProps {
  driver: DriverViewModel;
  handleRedirect?: () => void;
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
    <Grid item xs={12} className={classes.imageDiv}>
      <img alt="driver" src={driverImage} className={classes.image} />
    </Grid>
  );

  const statusView = (
    <Grid item xs={12} className={classes.statusContainer}>
      <Typography
        variant="subtitle2"
        className={
          driver.status === "Active"
            ? classes.statusActive
            : driver.status === "Break"
            ? classes.statusBreak
            : classes.statusNotWorking
        }
      >
        ● {driver.status}
      </Typography>
    </Grid>
  );

  const labelView = (label: string, value: string) => (
    <Grid item xs={12} className={classes.labelContainer}>
      <Typography variant="body2" className={classes.label}>
        {label}
      </Typography>

      <Typography variant="body2" className={classes.value}>
        {value}
      </Typography>
    </Grid>
  );

  const timeActiveView =
    driver.status === "Active"
      ? labelView("Active for:", `${driver.timeActive}h`)
      : labelView("Was active for:", `${driver.timeActive}h`);

  const viewToRender = (
    <Card className={classes.root} onClick={handleRedirect}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        {titleView}
        {imageView}
        {statusView}
        {timeActiveView}
        {labelView("Driving license:", driver.drivingLicense)}
        {labelView("Registration certificate:", driver.registrationCertificate)}
        {labelView("City, Zip code:", driver.city + ", " + driver.zipCode)}
        {labelView("Street:", driver.street)}
        {labelView("Email:", driver.email)}
      </Grid>
    </Card>
  );

  return viewToRender;
}
