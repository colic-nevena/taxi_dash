import DriverList from "../../../domain/modules/driver/valueObject/DriversList";


export default interface IDriverRepository {
    getDrivers(): Promise<DriverList>;
}