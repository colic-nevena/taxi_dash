import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";
import { VehicleActionTypes, VEHICLE_MARKERS_CHANGE } from "./VehicleActionTypes";

interface VehicleState {
  vehicles: VehicleViewModel[];
}

const defaultState: VehicleState = {
  vehicles: []
};

const vehicleReducer = (state: VehicleState = defaultState, action: VehicleActionTypes): VehicleState => {
  switch (action.type) {
    case VEHICLE_MARKERS_CHANGE:
      return { ...state, vehicles: action.payload };

    default:
      return state;
  }
};

export default vehicleReducer;
