import { combineReducers } from "redux";
import driverListReducer from "./driverList/DriverListReducer";
import vehicleListReducer from "./vehicleList/VehicleListReducer";
import baseReducer from "./base/BaseReducer";

const RootReducer = combineReducers({
    driverListReducer,
    vehicleListReducer,
    baseReducer
});

export default RootReducer;