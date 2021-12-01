import { Dispatch } from "redux";
import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";
import { VEHICLE_MARKERS_CHANGE } from "./VehicleActionTypes";

export const OnVehicleMarkerChange = (payload: VehicleViewModel[]) => async (dispatch: Dispatch) => {
  dispatch({
    type: VEHICLE_MARKERS_CHANGE,
    payload
  });
};
