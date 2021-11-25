import { DriverViewModel } from "../../presenter/driver/viewModel/DriverViewModel";
import { DriverActionTypes, GET_DRIVER_BY_ID_ERROR, DRIVER_LOADING, GET_DRIVER_BY_ID_SUCCESS } from "./DriverActionTypes";

interface DriverState {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    zipCode: string;
    street: string;
    timeActive: number;
    status: string;
    drivingLicense: string;
    registrationCertificate: string;
    loading: boolean;
    error?: string;
};

const defaultState: DriverState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    zipCode: "",
    street: "",
    timeActive: -1,
    status: "",
    drivingLicense: "",
    registrationCertificate: "",
    loading: false
};

const driverListReducer = (state: DriverState = defaultState, action: DriverActionTypes): DriverState => {
    switch (action.type) {
        case DRIVER_LOADING:
            return { ...state, loading: true };

        case GET_DRIVER_BY_ID_ERROR:
            return { ...state, loading: false, error: action.payload.errorMessage };

        case GET_DRIVER_BY_ID_SUCCESS:
            const { driver } = action.payload;
            const newState = Object.entries(driver).reduce((acc, curr) => {
            let key = curr[0];
            let val = curr[1];
            return { ...acc, [key]: val }
            }, {});
            
            return {
            ...defaultState,
            ...newState
            }
        default:
            return state;
    }
}

export default driverListReducer;