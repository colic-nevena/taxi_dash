import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BasePage from "../../page/base";
import AuthorizedRoutes from "./AuthorizedRoutes";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<BasePage />} />
        <Route path="app/*" element={<AuthorizedRoutes />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
