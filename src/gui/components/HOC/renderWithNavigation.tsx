import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SidebarMenuItem from "../MenuItem";
import { useLocation } from "react-router";
import { Container, Divider, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

const MENU_ITEMS = [
  { title: "DRIVERS", url: "/app/drivers" },
  { title: "WIDGETS", url: "/app/widgets" },
  { title: "MAP", url: "/app/map" },
];

function isSidebarMenuItemSelected(
  pathname: string,
  SidebarMenuItemUrl: string
): boolean {
  return SidebarMenuItemUrl === "/home"
    ? pathname === SidebarMenuItemUrl
    : pathname.indexOf(SidebarMenuItemUrl) === 0;
}

function getTitleForPage(pathname: string): string {
  const parts = pathname.split("/").filter((i) => i.length > 0);
  if (parts.length > 1)
    return `${parts[1][0].toUpperCase()}${parts[1].substr(1, parts[1].length)}`;
  return "Taxi Management Dashboard";
}

export default function renderWithNavigation(
  WrappedComponent: React.ComponentType<any>
) {
  return () => {
    const classes = useStyles();
    const theme = useTheme();
    const { pathname } = useLocation();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("Taxi Management Dashboard");

    React.useEffect(() => {
      setTitle(getTitleForPage(pathname));
    }, [pathname, setTitle]);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    const renderDrawer = (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div>
          {open && (
            <div className={classes.toolbar}>
              <img className={classes.imageIcon} src="/logo.png" alt="logo" />
              <Typography component="label" variant="subtitle2">
                taxi <br />
                management <br />
                dashboard <br />
              </Typography>

              <IconButton
                color="default"
                onClick={handleDrawerClose}
                className={classes.drawerCloseButton}
              >
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
          )}
        </div>
        <Container
          maxWidth={false}
          disableGutters={true}
          className={classes.list}
        >
          <List>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>

            {MENU_ITEMS.map(({ title, url }, index) => (
              <SidebarMenuItem
                title={title}
                url={url}
                key={index}
                selected={isSidebarMenuItemSelected(pathname, url)}
              />
            ))}
          </List>
        </Container>
      </Drawer>
    );

    const renderAppBar = (
      <div className={classes.appBar}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={6} md={6}>
            <Typography
              variant="h5"
              className={classes.title}
              style={{ cursor: "default" }}
              noWrap
            >
              {title}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider variant="fullWidth" className={classes.divider} />
          </Grid>
        </Grid>
      </div>
    );

    const renderContent = (
      <main className={classes.content}>
        {renderAppBar}
        <WrappedComponent />
      </main>
    );
    return (
      <div className={classes.root}>
        <CssBaseline />
        {renderDrawer}
        {renderContent}
      </div>
    );
  };
}
