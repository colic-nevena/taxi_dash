import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";
import {
  VehicleListActionTypes,
  GET_VEHICLES_ERROR,
  GET_VEHICLES_LOADING,
  GET_VEHICLES_SUCCESS
} from "./VehicleListActionTypes";

interface VehicleListState {
  vehicleList: VehicleViewModel[];
  loading: boolean;
  error?: string;
}

const defaultState: VehicleListState = {
  vehicleList: [],
  loading: false
};

const vehicleListReducer = (state: VehicleListState = defaultState, action: VehicleListActionTypes): VehicleListState => {
  switch (action.type) {
    case GET_VEHICLES_LOADING:
      return { ...state, loading: true };

    case GET_VEHICLES_ERROR:
      return { ...state, loading: false, error: action.payload.errorMessage };

    case GET_VEHICLES_SUCCESS:
      return { ...state, loading: false, vehicleList: action.payload.vehicleList };

    default:
      return state;
  }
};

export default vehicleListReducer;
