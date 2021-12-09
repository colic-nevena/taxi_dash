import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        color: "ff0000",
        borderRadius: "8px",
        opacity: 1,
        "&:hover": {
            cursor: "pointer",
            "& $image": {
                opacity: 0.88,
            },
        }
    },
    title: {
        textAlign: "center",
        padding: 3,
    },
    image: {
        margin: "auto",
        top: "65%",
        left: "50%",
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        position: "absolute",
        backgroundSize: "auto",
        transition: ".5s ease",
        opacity: 1,
        background: "#F0F7F3",
        backfaceVisibility: "hidden",
        display: "block",
        transform: "translate(-50%, -50%)"
    },
    imageDiv: {
        width: "100%",
        paddingBottom: "40%",
        position: "relative",
        overflow: "hidden"
    },
    statusContainer: {
        padding: 3,
        marginTop: 6
    },
    statusActive: {
        fontFamily: "Open Sans",
        fontWeight: 700,
        color: "#2CDEA8",
    },
    statusBreak: {
        fontFamily: "Open Sans",
        fontWeight: 700,
        color: "#2D9CDB",
    },
    statusNotWorking: {
        fontFamily: "Open Sans",
        fontWeight: 700,
        color: "#EB5757",
    },
    labelContainer: {
        display: "flex",
        flexDirection: "row",
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(0.25)
    },
    value: {
        marginLeft: theme.spacing(1)
    },
    label: {
        fontWeight: "bold"
    }
}));