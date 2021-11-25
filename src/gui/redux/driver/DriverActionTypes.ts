import { DriverViewModel } from "../../presenter/driver/viewModel/DriverViewModel";

export const GET_DRIVER_BY_ID_ERROR = "GET_DRIVER_BY_ID_ERROR";
export const DRIVER_LOADING = "DRIVER_LOADING";
export const GET_DRIVER_BY_ID_SUCCESS = "GET_DRIVER_BY_ID_SUCCESS";

interface GetDriverByIdLoading {
    type: typeof DRIVER_LOADING;
}

interface GetDriverByIdError {
    type: typeof GET_DRIVER_BY_ID_ERROR;
    payload: {
        errorMessage: string;
    }
}

interface GetDriverByIdSuccess {
    type: typeof GET_DRIVER_BY_ID_SUCCESS;
    payload: {
        driver: DriverViewModel;
    }
}

export type DriverActionTypes = GetDriverByIdLoading | GetDriverByIdError | GetDriverByIdSuccess;