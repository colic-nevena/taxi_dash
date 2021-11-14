import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BasePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/app/drivers");
  }, [navigate, location.pathname]);

  return <div>{/* THIS IS NOT A PLACE FOR ANY UI */}</div>;
}
