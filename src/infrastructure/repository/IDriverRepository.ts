import DriverList from "../../domain/modules/driver/valueObject/DriverList";

export default interface IDriverRepository {
    getDrivers(): Promise<DriverList>;
}