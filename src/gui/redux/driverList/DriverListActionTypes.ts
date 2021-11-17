import { DriverViewModel } from "../../presenter/driver/viewModel/DriverViewModel";

export const GET_DRIVERS_ERROR = "GET_DRIVERS_ERROR";
export const GET_DRIVERS_LOADING = "GET_DRIVERS_LOADING";
export const GET_DRIVERS_SUCCESS = "GET_DRIVERS_SUCCESS";

interface GetDriversLoading {
    type: typeof GET_DRIVERS_LOADING;
}

interface GetDriversError {
    type: typeof GET_DRIVERS_ERROR;
    payload: {
        errorMessage: string;
    }
}

interface GetDriversSuccess {
    type: typeof GET_DRIVERS_SUCCESS;
    payload: {
        driverList: DriverViewModel[];
    }
}

export type DriverListActionTypes = GetDriversLoading | GetDriversError | GetDriversSuccess;