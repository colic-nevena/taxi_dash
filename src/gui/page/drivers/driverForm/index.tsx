import { Container } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
// import { useNavigate } from "react-router";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { GetDriverById } from "../../../redux/driver/DriverActions";
import { RootStore } from "../../../redux/Store";
import { useStyles } from "./styles";

export default function DriverPage() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const classes = useStyles();
  const location = useLocation();

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
    const routeParts = location.pathname.split("/");
    const id = routeParts[3];
    dispatch(GetDriverById(id));
  }, [dispatch, location.pathname]);

  // const handleRedirect = (id: string) => navigate(id);

  const driversView = (
      <>{console.log(firstName)}</>
  );

  const viewToRender = (
    <Container disableGutters={true} maxWidth={false} className={classes.root}>
      {driversView}
    </Container>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
