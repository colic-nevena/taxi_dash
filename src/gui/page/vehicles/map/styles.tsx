import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    multiSelect: {
      marginTop: theme.spacing(2)
    },
    map: {
      marginTop: theme.spacing(10)
    },
    mapContainerElement: {
      height: "70vh",
      overflow: "hidden"
    },
    maxHeightElement: {
      height: "100%"
    }
  })
);
