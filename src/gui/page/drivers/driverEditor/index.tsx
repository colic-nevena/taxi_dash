import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";

export default function DriverProfile() {
  const classes = useStyles();

  const viewToRender = (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch"
      className={classes.root}
    >
      <Grid item xs={6}>
        {/* <DriverEditor /> */}
      </Grid>

      <Grid item xs={6} className={classes.previewRoot}>
        {/* <DriverPreview /> */}
      </Grid>
    </Grid>
  );

  return viewToRender;
}
