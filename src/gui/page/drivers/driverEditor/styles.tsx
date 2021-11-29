import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%"
  },
  previewRoot: {
    borderRadius: "10px",
    padding: theme.spacing(2, 0),
    backgroundColor: "#ffffff",
    minHeight: "100%"
  }
}));
