import { Container } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { RootStore } from "../../../redux/Store";
import { GetVehicles } from "../../../redux/vehicleList/VehicleListActions";
import { useStyles } from "./styles";

export default function Widgets() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { vehicleList, error, loading } = useSelector(
    (state: RootStore) => state.vehicleListReducer
  );

  useEffect(() => {
    dispatch(GetVehicles());
  }, [dispatch]);

  const viewToRender = (
    <Container disableGutters={true} maxWidth={false} className={classes.root}>
      it's working
    </Container>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
