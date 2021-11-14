import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2CDEA8'
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#A4A4A4'
    },
    success: {
      main: '#2CDEA8'
    },
    error: {
      main: '#DE4A2C'
    },
    text: {
      primary: '#000000'
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
 },
  props: {
    MuiButton: {
      variant: 'contained'
    },
    MuiTextField: {
      fullWidth: true,
      color: 'primary'
    },
    MuiCheckbox: {
      color: 'primary'
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        fontFamily: "Open Sans",
        color: '#FFFFFF',
        backgroundColor: '#A4A4A4',
        '&:hover': {
          backgroundColor: '#A4A4A4',
        }
      }
    },
    MuiTextField: {
      root: {
        fontWeight: 700,
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: '#2CDEA8'
        },
        '&:hover .MuiInputLabel-outlined': {
          color: '#2CDEA8'
        }
      }
    },
    MuiFormControl: {
      root: {
        fontFamily: "Open Sans",
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: '#2CDEA8'
        },
        '&:hover .MuiInputLabel-outlined': {
          color: '#2CDEA8'
        },
      }
    },
    MuiNativeSelect: {
      root: {
        fontFamily: "Open Sans",
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: '#2CDEA8'
        },
        '&:hover .MuiInputLabel-outlined': {
          color: '#2CDEA8'
        },
      }
    },
    MuiCircularProgress: {
      root: {
        '& .MuiCircularProgress-svg': {
          color: '#2CDEA8'
        }
      }
    },
    MuiInputAdornment: {
      root: {
        '& .MuiInputBase-adornedStart': {
          color: '#2CDEA8'
        }
      }
    }
  }
});

export const useStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    overflowX: 'hidden',
    height: '100vh',
    width: '100vw',
    background: '#F0F7F3',
  },
}));