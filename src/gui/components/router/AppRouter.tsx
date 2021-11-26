import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "../../page/base";
import AuthorizedRoutes from "./AuthorizedRoutes";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<BasePage />} />
        <Route path="app/*" element={<AuthorizedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
