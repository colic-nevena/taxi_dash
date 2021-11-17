import { combineReducers } from "redux";
import driverListReducer from "./driverList/DriverListReducer";

const RootReducer = combineReducers({
    driverListReducer
});

export default RootReducer;