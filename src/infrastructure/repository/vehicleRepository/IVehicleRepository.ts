import VehicleList from "../../../domain/modules/vehicle/valueObject/VehiclesList";

export default interface IVehicleRepository {
    getVehicles(): Promise<VehicleList>;
}

