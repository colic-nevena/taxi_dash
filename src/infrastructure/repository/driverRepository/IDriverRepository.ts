import DriverList from "../../../domain/modules/driver/valueObject/DriverList";
import Driver from "../../../domain/modules/driver/entity/Driver";
import StringId from "../../../domain/base/valueObject/uniqueEntityID/StringId";

export default interface IDriverRepository {
  getDrivers(): Promise<DriverList>;
  getDriverById(id: StringId): Promise<Driver>;
  updateDriver(driver: Driver): Promise<Driver>;
}
