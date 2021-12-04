import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetDriverById, OnChangeInputs, UpdateDriver } from "../../../redux/driver/DriverActions";
import { RootStore } from "../../../redux/Store";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { useStyles } from "./styles";
import { Button, Grid, TextField } from "@material-ui/core";
import driverImage from "../../../../static/dragAndDropPlaceholder.png";

export default function DriverForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [edited, setEdited] = useState(false);

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

  useEffect(() => {
    if (params.id) dispatch(GetDriverById(params.id));
  }, [dispatch, params]);

  const handleOnChange = (field: string, value: string) => {
    if (field === "city, zipCode") {
      let values: string[] = value.split(",");

      field = "city";
      value = values[0];
      dispatch(OnChangeInputs({ field, value }));

      field = "zipCode";
      value = values[1];
      dispatch(OnChangeInputs({ field, value }));
    } else {
      dispatch(OnChangeInputs({ field, value }));
    }
    setEdited(true);
  };

  const textFieldView = (name: string, label: string, defaultValue: string) => (
    <>
      <Grid item xs={10} lg={8}>
        <TextField
          id={name}
          variant="outlined"
          label={label}
          name={name}
          fullWidth
          classes={{
            root: classes.txtField
          }}
          inputProps={{
            spellCheck: "false"
          }}
          autoFocus={name === "firstName"}
          defaultValue={defaultValue}
          onChange={(e: any) => handleOnChange(e.target.name, e.target.value)}
        />
      </Grid>
      <Grid item xs={12} />
    </>
  );

  const handleUpdate = (e: any) => {
    dispatch(
      UpdateDriver(
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
        registrationCertificate
      )
    );
  };

  const buttonView = (
    <>
      <Grid item xs={4} md={3} lg={2}>
        <Button
          size="medium"
          disabled={!edited}
          className={classes.editButton}
          onClick={handleUpdate}
        >
          Save
        </Button>
      </Grid>
      <Grid item xs={12} />
    </>
  );

  const imageView = (
    <>
      <Grid item xs={2} lg={2} />
      <Grid item xs={10} lg={10} className={classes.imageDiv}>
        <img alt="driver" src={driverImage} className={classes.image} />
      </Grid>
    </>
  );

  const formView = (
    <>
      {textFieldView("firstName", "First Name", firstName)}
      {textFieldView("lastName", "Last Name", lastName)}
      {imageView}
      {textFieldView("city, zipCode", "City, Zip Code", city + ", " + zipCode)}
      {textFieldView("street", "Street", street)}
      {textFieldView("drivingLicense", "Driving License", drivingLicense)}
      {textFieldView(
        "registrationCertificate",
        "Registration Certificate",
        registrationCertificate
      )}
      {textFieldView("email", "Email", email)}
    </>
  );

  const viewToRender = (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={1}
      className={classes.editorRoot}
    >
      {formView}
      {buttonView}
    </Grid>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
