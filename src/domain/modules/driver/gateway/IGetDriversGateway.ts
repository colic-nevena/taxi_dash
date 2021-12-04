import DriverList from "../valueObject/DriverList";
import Driver from "../entity/Driver";
import StringId from "../../../base/valueObject/uniqueEntityID/StringId";

export default interface IGetDriversGateway {
  getDrivers(): Promise<DriverList>;
  getDriverById(id: StringId): Promise<Driver>;
  updateDriver(driver: Driver): Promise<Driver>;
}
