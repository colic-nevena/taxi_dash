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
  },

  image: {
    // margin: "auto",
    // top: "65%",
    // left: "50%",
    width: "auto",
    height: "auto",
    maxWidth: "80%",
    // position: "absolute",
    // backgroundSize: "auto",
    // transition: ".5s ease",
    opacity: 1,
    background: "#F0F7F3"
    // backfaceVisibility: "hidden",
    // display: "block"
  },
  imageDiv: {
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    // paddingBottom: "40%",
    // position: "relative",
    // overflow: "hidden"
  }
}));
