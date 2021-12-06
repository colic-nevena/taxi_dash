import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import DriversIndex from "../../page/drivers";
import DriverProfile from "../../page/drivers/driverEditor";
import Drivers from "../../page/drivers/driverList";
import Map from "../../page/vehicles/map";
import Widgets from "../../page/vehicles/widgets";
import AppBreadcrumbs from "../AppBreadcrumbs";
import renderWithNavigation from "../HOC/renderWithNavigation";

function AuthorizedRoutes() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Routes>
        <Route element={<AppBreadcrumbs />}>
          <Route path="drivers" element={<DriversIndex />}>
            <Route index element={<Drivers />} />
            <Route path=":id" element={<DriverProfile />} />
          </Route>
          <Route path="widgets" element={<Widgets />} />
          <Route path="map" element={<Map />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Page not found!</p>
            </main>
          }
        />
      </Routes>
    </Container>
  );
}

export default renderWithNavigation(AuthorizedRoutes);
