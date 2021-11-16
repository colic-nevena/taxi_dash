import DriverList from "../valueObject/DriversList";

export default interface IGetDriversGateway {
    getDrivers(): Promise<DriverList>;
}