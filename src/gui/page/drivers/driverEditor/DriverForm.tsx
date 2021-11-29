import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { GetDriverById } from "../../../redux/driver/DriverActions";

export default function DriverForm() {
  const params = useParams();
  const dispatch = useDispatch();

  // todo
  // get driver from redux

  useEffect(() => {
    if (params.id) dispatch(GetDriverById(params.id));
  }, [dispatch, params]);

  return <h1>form</h1>;
}
