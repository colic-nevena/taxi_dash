import DriverList from "../../../domain/modules/driver/valueObject/DriverList";
import StringId from "../../../domain/base/valueObject/uniqueEntityID/StringId";
import IDriversDataSource from "../../datasource/drivers/IDriverDataSource";
import IDriverMapperFactory from "./factory/IDriverMapperFactory";
import IDriverRepository from "./IDriverRepository";
import Driver from "../../../domain/modules/driver/entity/Driver";

export class DriverRepositoryError extends Error {
  constructor(message: string) {
    super(`[DriverRepository] Error - ${message}`);
  }
}

export default class DriverRepository implements IDriverRepository {
  constructor(
    private _dataSource: IDriversDataSource,
    private _driverMapperFactory: IDriverMapperFactory
  ) {}

  async updateDriver(driver: Driver): Promise<Driver> {
    try {
      const updatedDriver = await this._dataSource.updateDriver(
        this._driverMapperFactory.getDriverDataMapper().map(driver)
      );
      return this._driverMapperFactory.getDriverMapper().map(updatedDriver);
    } catch (err: any) {
      throw new DriverRepositoryError(`[updateDriver] - ${err.message}`);
    }
  }

  async getDrivers(): Promise<DriverList> {
    try {
      const drivers = await this._dataSource.getDrivers();
      const driversMap = drivers.map((driver) =>
        this._driverMapperFactory.getDriverMapper().map(driver)
      );
      return DriverList.create(driversMap);
    } catch (err: any) {
      throw new DriverRepositoryError(`[getDrivers] - ${err.message}`);
    }
  }

  async getDriverById(id: StringId): Promise<Driver> {
    try {
      const driver = await this._dataSource.getDriverById(id.getId());
      return this._driverMapperFactory.getDriverMapper().map(driver);
    } catch (err: any) {
      throw new DriverRepositoryError(`[getDriverById] - ${err.message}`);
    }
  }
}
