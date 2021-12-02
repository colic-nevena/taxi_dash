import { VehicleViewModel } from "../../presenter/vehicle/viewModel/VehicleViewModel";

export const VEHICLE_MARKERS_CHANGE = "VEHICLE_MARKERS_CHANGE";

interface VehicleMarkersChange {
  type: typeof VEHICLE_MARKERS_CHANGE;
  payload: VehicleViewModel[];
}

export type VehicleActionTypes = VehicleMarkersChange;
