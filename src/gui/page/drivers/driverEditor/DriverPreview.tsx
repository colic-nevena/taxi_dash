import DriverCard from "../../../components/driverCard";
import { useSelector } from "react-redux";
import { RootStore } from "../../../redux/Store";
import ErrorMessage from "../../../components/ErrorMessage";
import Loader from "../../../components/Loader";
import { Grid } from "@material-ui/core";

export default function DriverForm() {
  const driverState = useSelector((state: RootStore) => state.driverReducer);
  const { error, loading } = driverState;

  const viewToRender = (
    <Grid item xs={10}>
      <DriverCard key={driverState.id} driver={driverState} />
    </Grid>
  );

  if (error) return <ErrorMessage message={error} />;
  else if (loading) return <Loader />;
  else return viewToRender;
}
