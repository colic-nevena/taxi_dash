import VehicleList from "../../../domain/modules/vehicle/valueObject/VehiclesList";

export default interface IVehicleRepository {
    getDrivers(): Promise<VehicleList>;
}