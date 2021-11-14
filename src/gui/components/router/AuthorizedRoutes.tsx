import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import DriversPage from "../../page/Drivers";
import renderWithNavigation from "../HOC/renderWithNavigation";

function AuthorizedRoutes() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Routes>
        <Route path="drivers" element={<DriversPage />} />
      </Routes>
    </Container>
  );
}

export default renderWithNavigation(AuthorizedRoutes);
