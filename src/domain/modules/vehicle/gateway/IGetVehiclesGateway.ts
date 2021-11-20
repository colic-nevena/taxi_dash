import VehicleList from "../valueObject/VehicleList";

export default interface IGetVehiclesGateway {
    getVehicles(): Promise<VehicleList>;
}