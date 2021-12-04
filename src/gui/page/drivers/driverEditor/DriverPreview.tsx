import DriverCard from "../../../components/driverCard";
import { useSelector } from "react-redux";
import { RootStore } from "../../../redux/Store";
import { DriverViewModel } from "../../../presenter/driver/viewModel/DriverViewModel";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
<<<<<<< HEAD
import Button from "@mui/material/Button";
=======
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
>>>>>>> 00a41441457592154c66613b2c71abd4f34707d5

export default function DriverForm() {
  const classes = useStyles();

  const {
    id,
    firstName,
    lastName,
    email,
    city,
    zipCode,
    street,
    timeActive,
    status,
    drivingLicense,
    registrationCertificate,
    loading,
    error
  } = useSelector((state: RootStore) => state.driverReducer);
  // todo
  // get driver from redux

  const driver: DriverViewModel = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    city: city,
    zipCode: zipCode,
    street: street,
    timeActive: timeActive,
    status: status,
    drivingLicense: drivingLicense,
    registrationCertificate: registrationCertificate
  };

  const viewToRender = (
    <Grid item xs={10}>
      <DriverCard key={driver.id} driver={driver} />
    </Grid>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
