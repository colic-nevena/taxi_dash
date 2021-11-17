import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    menuButton: {
      color: "#818287",
      backgroundColor: "#363740",
      marginLeft: "0.25vw"
    },
    signOutButton: {
      color: "#000000"
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      backgroundColor: "#363740",
      width: drawerWidth,
      overflow: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      backgroundColor: "#363740",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    content: {
      flexGrow: 1,
      margin: theme.spacing(0, 2),
    },
    error: {
      width: theme.spacing(25),
      margin: "auto",
    },
    imageIcon: {
      marginTop: theme.spacing(1),
      width: 65,
      height: 70
    },
    signOutIcon: {
      minHeight: "2vh",
      minWidth: "2vw",
    },
    toolbar: {
      backgroundColor: "#363740",
      color: "#FFFFFF",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: theme.spacing(2, 0, 3),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      cursor: "default",
    },
    appBar: {
      position: "sticky",
      zIndex: 1,
      top: 0,
      marginBottom: theme.spacing(2),
      backgroundColor: "#F0F7F3",
      padding: theme.spacing(1, 0, 0),
    },
    version: {
      color: "#9BABA6",
      textDecoration: "none",
      cursor: "pointer",
    },
    drawerCloseButton: {
      color: "#F2F2F2",
    },
    list: {
      backgroundColor: "#363740",
    },
    title: {
      color: "#293330",
      fontWeight: 600
    },
    divider: {
      margin: theme.spacing(0.5, 0, 0),
    },
  })
);
