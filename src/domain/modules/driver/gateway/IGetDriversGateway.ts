import DriverList from "../valueObject/DriverList";

export default interface IGetDriversGateway {
    getDrivers(): Promise<DriverList>;
}