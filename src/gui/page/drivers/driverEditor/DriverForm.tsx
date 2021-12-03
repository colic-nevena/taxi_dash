import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetDriverById, OnChangeInputs } from "../../../redux/driver/DriverActions";
import { RootStore } from "../../../redux/Store";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { useStyles } from "./styles";
import { Button, Grid, TextField } from "@material-ui/core";

export default function DriverForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [edited, setEdited] = useState(false);

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

  const textFieldView = (name: string, value: string) => (
    <>
      <Grid item xs={10} lg={8}>
        <TextField
          id={name}
          variant="outlined"
          label={name}
          name={name}
          fullWidth
          classes={{
            root: classes.txtField
          }}
          inputProps={{
            spellCheck: "false"
          }}
          autoFocus={name === "firstName"}
          value={value}
          onChange={(e: any) => handleOnChange(e.target.name, e.target.value)}
        />
      </Grid>
      <Grid item xs={12} />
    </>
  );

  const buttonView = (
    <>
      <Grid item xs={4} md={3} lg={2}>
        <Button
          size="small"
          disabled={!edited}
          className={classes.editButton}
          // onClick={}
        >
          Save
        </Button>
      </Grid>
      <Grid item xs={12} />
    </>
  );

  const formView = <>{textFieldView("firstName", firstName)}</>;

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
