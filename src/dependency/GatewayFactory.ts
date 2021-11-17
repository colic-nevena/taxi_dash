import IGetDriversGateway from "../domain/modules/driver/gateway/IGetDriversGateway";
import RepositoryFactory from "./RepositoryFactory";

export default class GatewayFactory {
    constructor(private repositoryFactory: RepositoryFactory) { }

    getGetDriversGateway(): IGetDriversGateway {
        return this.repositoryFactory.getDriverRepository();
    }
}
