import React from "react";
import {
  createStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Mail } from "@material-ui/icons";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import WidgetsIcon from "@mui/icons-material/WidgetsOutlined";
import MapIcon from "@mui/icons-material/MapOutlined";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  title: string;
  url: string;
  selected: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selected: {
      color: "#F2F2F2",
      fontWeight: 700,
    },
    default: {
      color: "#BDBDBD",
      fontWeight: 700,
    },
    listItem: {
      marginLeft: "0.25vw",
    },
    icon: {
      color: "#D3D3D3"
    }
  })
);

export default function MenuItem(props: MenuItemProps) {
  const { title, url, selected } = props;

  const navigate = useNavigate();

  function handleClick(event: any) {
    navigate(url);
  }

  const classes = useStyles();

  function findIcon(name: string, selected: boolean) {
    let result;
    switch (name) {
      case "DRIVERS":
        result = <PeopleIcon className={classes.icon} />;
        break;

      case "WIDGETS":
        result = <WidgetsIcon className={classes.icon} />;
        break;

      case "MAP":
        result = <MapIcon className={classes.icon} />;
        break;

      default:
        result = <Mail className={classes.icon} />;
    }
    return result;
  }

  return (
    <ListItem button key={title} onClick={handleClick} selected={selected}>
      <ListItemIcon className={classes.listItem}>
        {findIcon(title, selected)}
      </ListItemIcon>
      <ListItemText
        secondary={title}
        secondaryTypographyProps={{
          className: selected ? classes.selected : classes.default,
        }}
      />
    </ListItem>
  );
}
