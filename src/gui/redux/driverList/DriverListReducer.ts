import { DriverViewModel } from "../../presenter/driver/viewModel/DriverViewModel";
import { DriverListActionTypes, GET_DRIVERS_ERROR, GET_DRIVERS_LOADING, GET_DRIVERS_SUCCESS } from "./DriverListActionTypes";

interface DriverListState {
    driverList: DriverViewModel[];
    loading: boolean;
    error?: string;
};

const defaultState: DriverListState = {
    driverList: [],
    loading: false
};

const driverListReducer = (state: DriverListState = defaultState, action: DriverListActionTypes): DriverListState => {
    switch (action.type) {
        case GET_DRIVERS_LOADING:
            return { ...state, loading: true };

        case GET_DRIVERS_ERROR:
            return { ...state, loading: false, error: action.payload.errorMessage };

        case GET_DRIVERS_SUCCESS:
            return { ...state, loading: false, driverList: action.payload.driverList };

        default:
            return state;
    }
}

export default driverListReducer;