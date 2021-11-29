import { DriverViewModel } from "../../presenter/driver/viewModel/DriverViewModel";

export const GET_DRIVER_BY_ID_ERROR = "GET_DRIVER_BY_ID_ERROR";
export const DRIVER_LOADING = "DRIVER_LOADING";
export const GET_DRIVER_BY_ID_SUCCESS = "GET_DRIVER_BY_ID_SUCCESS";
export const DRIVER_CHANGE_INPUTS = "DRIVER_CHANGE_INPUTS";

export type DriverInputsModel = {
  field: string;
  value: string;
};

interface DriverChangeInputs {
  type: typeof DRIVER_CHANGE_INPUTS;
  payload: DriverInputsModel;
}

interface DriverLoading {
  type: typeof DRIVER_LOADING;
}

interface GetDriverByIdError {
  type: typeof GET_DRIVER_BY_ID_ERROR;
  payload: {
    errorMessage: string;
  };
}

interface GetDriverByIdSuccess {
  type: typeof GET_DRIVER_BY_ID_SUCCESS;
  payload: {
    driver: DriverViewModel;
  };
}

export type DriverActionTypes =
  | DriverLoading
  | GetDriverByIdError
  | GetDriverByIdSuccess
  | DriverChangeInputs;
