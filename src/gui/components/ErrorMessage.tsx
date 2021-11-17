import { Container, makeStyles } from "@material-ui/core";
import { Alert } from "@mui/material";

interface ErrorMessageProps {
  message: string | undefined;
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  errorMessage: {
    marginBottom: "3vh",
  },
}));

export default function ErrorMessage({ message }: ErrorMessageProps) {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container}>
      <Alert className={classes.errorMessage} severity="error">
        {message}
      </Alert>
    </Container>
  );
}
