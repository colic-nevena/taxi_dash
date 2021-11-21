import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "default",
    margin: theme.spacing(1, 0)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));