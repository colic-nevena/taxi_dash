import { Link, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

interface BreadcrumbItemProps {
  text: string;
  url: string;
  isLink: boolean;
}

const useStyles = makeStyles(() => ({
  cursor: {
    cursor: "default",
  },
}))

export default function BreadcrumbItem({
  text,
  url,
  isLink,
}: BreadcrumbItemProps) {
  const name = `${text[0].toUpperCase()}${text.substr(1, text.length)}`;
  const navigate = useNavigate();
  const classes = useStyles();
  
  const labelBreadcrumb = (
    <Typography color="textPrimary" className={classes.cursor}>
      {name.toLocaleLowerCase()}
    </Typography>
  )

  const linkBreadCrumb = (
    <Link color="inherit" href="/" onClick={handleClick} >
      {name}
    </Link>
  )

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    navigate(url);
  }

  if (!isLink) return labelBreadcrumb;
  else return linkBreadCrumb;

}
