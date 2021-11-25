import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import DriversPage from "../../page/drivers/driverList";
import DriverPage from "../../page/drivers/driverForm";
import Widgets from "../../page/vehicles/widgets";
import AppBreadcrumbs from "../AppBreadcrumbs";
import renderWithNavigation from "../HOC/renderWithNavigation";

function AuthorizedRoutes() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Routes>
        <Route path="*" element={<AppBreadcrumbs />} />
        <Route path="drivers" element={<DriversPage />} >
          <Route path=":id" element={<DriverPage />} />
        </Route>
        <Route path="widgets" element={<Widgets />} />
      </Routes>
    </Container>
  );
}

export default renderWithNavigation(AuthorizedRoutes);
