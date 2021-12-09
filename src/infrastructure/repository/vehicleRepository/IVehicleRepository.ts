import VehicleList from "../../../domain/modules/vehicle/valueObject/VehicleList";

export default interface IVehicleRepository {
    getVehicles(): Promise<VehicleList>;
}

