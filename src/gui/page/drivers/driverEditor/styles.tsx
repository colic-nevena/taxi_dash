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
  txtField: {
    borderRadius: "6px",
    zIndex: 0,
    backgroundColor: "#FFFFFF",
    fontWeight: 700
  },
  editorRoot: {
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  editButton: {
    borderRadius: "10px",
    background: "#2CDEA8",
    "&:hover": {
      cursor: "pointer",
      background: "#2CDEA8"
    }
  }
}));
