import DriverList from "../../driver/valueObject/DriverList";
import VehicleList from "../valueObject/VehicleList";

export default interface IGetVehiclesGateway {
    getVehicles(): Promise<VehicleList>;
    getDrivers(): Promise<DriverList>;
}