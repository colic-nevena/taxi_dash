import { combineReducers } from "redux";
import driverListReducer from "./driverList/DriverListReducer";
import vehicleListReducer from "./vehicleList/VehicleListReducer";
import driverReducer from "./driver/DriverReducer";
import baseReducer from "./base/BaseReducer";

const RootReducer = combineReducers({
  driverListReducer,
  vehicleListReducer,
  driverReducer,
  baseReducer
});

export default RootReducer;
