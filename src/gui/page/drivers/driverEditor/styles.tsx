import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%"
  },
  previewRoot: {
    borderRadius: "10px",
    padding: theme.spacing(2, 0)
  },
  textField: {
    margin: theme.spacing(1)
  },
  topTextField: {
    marginTop: theme.spacing(2.5)
  }
}));
