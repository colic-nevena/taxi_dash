import { combineReducers } from "redux";
import driverListReducer from "./driverList/DriverListReducer";
import vehicleListReducer from "./vehicleList/VehicleListReducer";
import driverReducer from "./driver/DriverReducer";

const RootReducer = combineReducers({
    driverListReducer,
    vehicleListReducer,
    driverReducer
});

export default RootReducer;