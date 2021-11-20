import VehiclesList from "../valueObject/VehiclesList";

export default interface IGetVehiclesGateway {
    getVehicles(): Promise<VehiclesList>;
}