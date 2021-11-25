import DriverList from "../../../domain/modules/driver/valueObject/DriverList";
import StringId from "../../../domain/base/valueObject/uniqueEntityID/StringId";
import IDriversDataSource from "../../datasource/drivers/IDriverDataSource";
import IDriverMapperFactory from "./factory/IDriverMapperFactory";
import IDriverRepository from "./IDriverRepository";
import Driver from "../../../domain/modules/driver/entity/Driver";

export class DriverRepositoryError extends Error {
    constructor(message: string) {
        super(`[DriverRepository] Error - ${message}`)
    }
}

export default class DriverRepository implements IDriverRepository {
    constructor(
        private _dataSource: IDriversDataSource,
        private _driverMapperFactory: IDriverMapperFactory
    ) { }

    async getDrivers(): Promise<DriverList> {
        try {
            const drivers = await this._dataSource.getDrivers();
            const driversMap = drivers.map(driver => this._driverMapperFactory.getDriverMapper().map(driver));
            return DriverList.create(driversMap);
        } catch(err: any) {
            throw new DriverRepositoryError(`[getDrivers] - ${err.message}`);
        }
    }

    async getDriverById(id: StringId): Promise<Driver> {
        try {
            const driver = await this._dataSource.getDriverById(id.getId());
            const driverMap = this._driverMapperFactory.getDriverMapper().map(driver);
            return driverMap;
        } catch(err: any) {
            throw new DriverRepositoryError(`[getDriverById] - ${err.message}`);
        }
    }
}