import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetDriverById, OnChangeInputs } from "../../../redux/driver/DriverActions";
import { RootStore } from "../../../redux/Store";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { useStyles } from "./styles";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";

export default function DriverForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const {
    // id,
    firstName,
    lastName,
    email,
    city,
    zipCode,
    street,
    // timeActive,
    // status,
    drivingLicense,
    registrationCertificate,
    loading,
    error
  } = useSelector((state: RootStore) => state.driverReducer);

  useEffect(() => {
    if (params.id) dispatch(GetDriverById(params.id));
  }, [dispatch, params]);

  const handleOnChange = (field: string, value: string) => {
    dispatch(OnChangeInputs({ field, value }));
  };

  // const textFieldView = ()

  const firstNameView = (
    <Grid item xs={10} className={`${classes.textField} ${classes.topTextField}`}>
      <TextField
        fullWidth
        name="firstName"
        label="First name"
        variant="outlined"
        defaultValue={firstName}
        onChange={(e: any) => handleOnChange(e.target.name, e.target.value)}
      />
    </Grid>
  );

  const lastNameView = (
    <Grid item xs={6} className={classes.textField}>
      <TextField label="Last name" variant="outlined" defaultValue={lastName} />
    </Grid>
  );

  const emailView = (
    <Grid item xs={6} className={classes.textField}>
      <TextField label="Email" variant="outlined" defaultValue={email} />
    </Grid>
  );

  const cityZipCodeView = (
    <Grid item xs={6} className={classes.textField}>
      <TextField label="City, Zip code " variant="outlined" defaultValue={city + ", " + zipCode} />
    </Grid>
  );

  const streetView = (
    <Grid item xs={6} className={classes.textField}>
      <TextField label="Street" variant="outlined" defaultValue={street} />
    </Grid>
  );

  const drivingLicenseView = (
    <Grid item xs={6} className={classes.textField}>
      <TextField label="Driving license" variant="outlined" defaultValue={drivingLicense} />
    </Grid>
  );

  const registrationCertificateView = (
    <Grid item xs={6} className={classes.textField}>
      <TextField
        label="Registration certificate"
        variant="outlined"
        defaultValue={registrationCertificate}
      />
    </Grid>
  );

  const viewToRender = (
    <>
      {firstNameView}
      {lastNameView}
      {emailView}
      {cityZipCodeView}
      {drivingLicenseView}
      {registrationCertificateView}
      {streetView}
    </>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
