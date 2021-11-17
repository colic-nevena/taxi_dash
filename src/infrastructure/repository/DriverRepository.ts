import DriverList from "../../domain/modules/driver/valueObject/DriversList";
import IDriversDataSource from "../datasource/drivers/IDriverDataSource";
import IDriverMapperFactory from "./factory/IDriverMapperFactory";
import IDriverRepository from "./IDriverRepository";

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
}