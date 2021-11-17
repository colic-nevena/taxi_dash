import DriverDataSource from "../infrastructure/datasource/drivers/DriverDataSource";
import NetworkController from "../infrastructure/network/NetworkController";
import DriverRepository from "../infrastructure/repository/DriverRepository";
import DriverMapperFactory from "../infrastructure/repository/factory/DriverMapperFactory";
import IDriverRepository from "../infrastructure/repository/IDriverRepository";

export default class RepositoryFactory {
    constructor(private nwc: NetworkController) { }
    
    getDriverRepository(): IDriverRepository {
        return new DriverRepository(
            new DriverDataSource(this.nwc),
            new DriverMapperFactory()
        )
    }
}