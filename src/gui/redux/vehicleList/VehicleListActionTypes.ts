import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";

export const GET_VEHICLES_ERROR = "GET_VEHICLES_ERROR";
export const GET_VEHICLES_LOADING = "GET_VEHICLES_LOADING";
export const GET_VEHICLES_SUCCESS = "GET_VEHICLES_SUCCESS";

interface GetVehiclesLoading {
  type: typeof GET_VEHICLES_LOADING;
}

interface GetVehiclesError {
  type: typeof GET_VEHICLES_ERROR;
  payload: {
    errorMessage: string;
  };
}

interface GetVehiclesSuccess {
  type: typeof GET_VEHICLES_SUCCESS;
  payload: {
    vehicleList: VehicleViewModel[];
  };
}

export type VehicleListActionTypes = GetVehiclesLoading | GetVehiclesError | GetVehiclesSuccess;
