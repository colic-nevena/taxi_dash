import { Container } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { GetDriverById } from "../../../redux/driver/DriverActions";
import { RootStore } from "../../../redux/Store";
import { useStyles } from "./styles";

export default function DriverProfile() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const params = useParams();

  const {
    // id,
    // firstName,
    // lastName,
    // email,
    // city,
    // zipCode,
    // street,
    // timeActive,
    // status,
    // drivingLicense,
    // registrationCertificate,
    loading,
    error,
  } = useSelector((state: RootStore) => state.driverReducer);

  useEffect(() => {
    if (params.id) dispatch(GetDriverById(params.id));
  }, [dispatch, params]);

  // console.log(id, firstName)

  const viewToRender = (
    <Container disableGutters={true} maxWidth={false} className={classes.root}>
      <div>ovde kontent neki</div>
    </Container>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
