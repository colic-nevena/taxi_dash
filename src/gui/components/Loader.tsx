import { makeStyles, Container } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  main: {
    zIndex: 999,
    width: "50vw",
    height: "50vh",
    margin: "auto",
    overflow: "show",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <Container disableGutters={true} maxWidth={false} className={classes.main}>
      <CircularProgress />
    </Container>
  );
}
