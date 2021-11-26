import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import Drivers from "../../page/drivers";
import DriverProfile from "../../page/drivers/driverForm";
import DriversIndex from "../../page/drivers/driverList";
import Map from "../../page/vehicles/map";
import Widgets from "../../page/vehicles/widgets";
import AppBreadcrumbs from "../AppBreadcrumbs";
import renderWithNavigation from "../HOC/renderWithNavigation";

function AuthorizedRoutes() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Routes>

        <Route element={<AppBreadcrumbs />} > 

          <Route path="drivers" element={<Drivers />}>
            <Route index element={<DriversIndex />} />
            <Route path=":id" element={<DriverProfile />} />
          </Route>
          
          <Route path="widgets" element={<Widgets />} />
          <Route path="map" element={<Map />} />
          
        </Route>

      </Routes>
    </Container>
  );
}

export default renderWithNavigation(AuthorizedRoutes);
