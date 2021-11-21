import { combineReducers } from "redux";
import driverListReducer from "./driverList/DriverListReducer";
import vehicleListReducer from "./vehicleList/VehicleListReducer";

const RootReducer = combineReducers({
    driverListReducer,
    vehicleListReducer
});

export default RootReducer;