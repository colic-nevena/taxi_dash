import DriverDataSource from "../infrastructure/datasource/drivers/DriverDataSource";
import NetworkController from "../infrastructure/network/NetworkController";
import DriverMapperFactory from "../infrastructure/repository/driverRepository/DriverMapperFactory";
import DriverRepository from "../infrastructure/repository/driverRepository/DriverRepository";
import IDriverRepository from "../infrastructure/repository/driverRepository/IDriverRepository";
import IVehicleRepository from "../infrastructure/repository/vehicleRepository/IVehicleRepository";
import VehicleRepository from "../infrastructure/repository/vehicleRepository/VehicleRepository";
import VehicleDataSource from "../infrastructure/datasource/vehicles/VehicleDataSource";
import VehicleMapperFactory from "../infrastructure/repository/vehicleRepository/factory/VehicleMapperFactory";
import IBaseRepository from "../infrastructure/repository/baseRepository/IBaseRepository";
import BaseRepository from "../infrastructure/repository/baseRepository/BaseRepository";
import BaseDataSource from "../infrastructure/datasource/base/BaseDatasource";
import IGetVehiclesGateway from "../domain/modules/vehicle/gateway/IGetVehiclesGateway";
import GetVehiclesGateway from "../infrastructure/repository/vehicleRepository/gateway/GetVehiclesGateway";

export default class RepositoryFactory {
    constructor(private nwc: NetworkController) { }

    getDriverRepository(): IDriverRepository {
        return new DriverRepository(
            new DriverDataSource(this.nwc),
            new DriverMapperFactory()
        )
    }

    getVehiclesRepository(): IVehicleRepository {
        return new VehicleRepository(
            new VehicleDataSource(this.nwc),
            new VehicleMapperFactory()
        )
    }

    getConnectMqttRepository(): IBaseRepository {
        return new BaseRepository(
            new BaseDataSource()
        )
    }

    getGetVehiclesGateway(): IGetVehiclesGateway {
        return new GetVehiclesGateway(
            new VehicleRepository(
                new VehicleDataSource(this.nwc),
                new VehicleMapperFactory()
            ),
            new DriverRepository(
                new DriverDataSource(this.nwc),
                new DriverMapperFactory()
            )
        )
    }
}