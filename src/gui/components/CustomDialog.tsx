import {
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import React, { ReactElement } from "react";

export type DialogAction = {
  text: string;
  click: () => void;
  primary: boolean;
};

const useStyles = makeStyles((theme) => ({
  dialogPrimary: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.grey[100],
    "&:hover": {
      backgroundColor: theme.palette.grey[100]
    }
  },
  dialogSecondary: {
    color: theme.palette.grey[600],
    backgroundColor: theme.palette.grey[100],
    "&:hover": {
      backgroundColor: theme.palette.grey[100]
    }
  }
}));

interface CustomDialogProps {
  open: boolean;
  title: string;
  contentText: string;
  content?: ReactElement;
  onClose: () => void;
  actions: DialogAction[];
}

export default function CustomDialog(props: CustomDialogProps) {
  const classes = useStyles();

  const { open, title, contentText, actions, content, onClose } = props;

  const buttons = (
    <>
      {actions.map((action, index) => {
        return (
          <Button
            key={index}
            onClick={action.click}
            className={action.primary ? classes.dialogPrimary : classes.dialogSecondary}
          >
            {action.text}
          </Button>
        );
      })}
    </>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={"xs"}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{contentText}</DialogContentText>
        {content}
      </DialogContent>
      <DialogActions>{buttons}</DialogActions>
    </Dialog>
  );
}
