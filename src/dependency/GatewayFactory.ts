import IConnectMqttGateway from "../domain/base/gateway/IConnectMqttGateway";
import IGetDriversGateway from "../domain/modules/driver/gateway/IGetDriversGateway";
import IGetVehiclesGateway from "../domain/modules/vehicle/gateway/IGetVehiclesGateway";
import RepositoryFactory from "./RepositoryFactory";

export default class GatewayFactory {
  constructor(private repositoryFactory: RepositoryFactory) {}

  getGetDriversGateway(): IGetDriversGateway {
    return this.repositoryFactory.getDriverRepository();
  }

  getGetVehiclesGateway(): IGetVehiclesGateway {
    return this.repositoryFactory.getGetVehiclesGateway();
  }

  getConnectMqttGateway(): IConnectMqttGateway {
    return this.repositoryFactory.getConnectMqttRepository();
  }
}
