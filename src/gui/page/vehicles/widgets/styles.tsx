import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    title: {
      textAlign: "center",
      padding: 3,
      fontSize: 18,
      fontWeight: "bold",
    },
    cardContainer: {
      margin: theme.spacing(1, 2, 1, 0),
      border: "1px solid #d3d3d3",
    },
    tab: {
      fontSize: "12px",
      minWidth: "5vw",
    },
    smallerTab: {
      fontSize: "12px",
      minWidth: "5vw",
    },
    appbar: {
      marginBottom: theme.spacing(2),
    },
    circularBar: {
      width: "10vw",
    },
    circularBarContainer: {
      marginTop: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(1.5),
    },
    image: {
      margin: "auto",
      top: "65%",
      left: "50%",
      width: "auto",
      height: "auto",
      maxWidth: "65%",
      position: "absolute",
      backgroundSize: "auto",
      transition: ".5s ease",
      opacity: 1,
      background: "#F0F7F3",
      backfaceVisibility: "hidden",
      display: "block",
      transform: "translate(-50%, -50%)",
    },
    imageDiv: {
      width: "100%",
      paddingBottom: "40%",
      position: "relative",
      overflow: "hidden",
    },
    thermoIconInfo: {
      display: "flex",
      flexDirection: "row",
      marginLeft: theme.spacing(1),
    },
    tempValue: {
      margin: theme.spacing(1, 0, 0, 0.5),
      fontSize: 24
    },
    meterContainer: {
      height: "10vh",
      backgroundColor: "#3A3A3A",
      color: "#ffffff",
      marginBottom: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    meterValue: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      fontSize: 34,
    },
  })
);
