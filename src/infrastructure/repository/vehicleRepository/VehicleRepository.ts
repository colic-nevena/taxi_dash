import VehicleList from "../../../domain/modules/vehicle/valueObject/VehiclesList";
import IVehicleDataSource from "../../datasource/vehicles/IVehicleDataSource";
import IVehicleRepository from "./IVehicleRepository";
import IVehicleMapperFactory from "./factory/IVehicleMapperFactory";

export class VehicleRepositoryError extends Error {
    constructor(message: string) {
        super(`[VehicleRepository] Error - ${message}`)
    }
}

export default class VehicleRepository implements IVehicleRepository {
    constructor(
        private _dataSource: IVehicleDataSource,
        private _vehicleMapperFactory: IVehicleMapperFactory
    ) { }

    async getVehicles(): Promise<VehicleList> {
        try {
            const vehicles = await this._dataSource.getVehicles();
            const vehiclesMap = vehicles.map(vehicle => this._vehicleMapperFactory.getVehicleMapper().map(vehicle));
            return VehicleList.create(vehiclesMap);
        } catch(err: any) {
            throw new VehicleRepositoryError(`[getVehicles] - ${err.message}`);
        }
    }
}