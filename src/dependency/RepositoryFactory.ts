import DriverDataSource from "../infrastructure/datasource/drivers/DriverDataSource";
import NetworkController from "../infrastructure/network/NetworkController";
import DriverMapperFactory from "../infrastructure/repository/driverRepository/DriverMapperFactory";
import DriverRepository from "../infrastructure/repository/driverRepository/DriverRepository";
import IDriverRepository from "../infrastructure/repository/driverRepository/IDriverRepository";

export default class RepositoryFactory {
    constructor(private nwc: NetworkController) { }
    
    getDriverRepository(): IDriverRepository {
        return new DriverRepository(
            new DriverDataSource(this.nwc),
            new DriverMapperFactory()
        )
    }

    // getVehiclesRepository(): 
    
    //TODO 2
}