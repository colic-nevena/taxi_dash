import Config from "../config/Config";
import NetworkController from "../infrastructure/network/NetworkController";
import GatewayFactory from "./GatewayFactory";
import RepositoryFactory from "./RepositoryFactory";

export class Dependency {
    private _config;
    private _nwc;
    private _gatewayFactory;
    private _repositoryFactory;

    constructor(env: any) {
        this._config = new Config(env);
        this._nwc = new NetworkController(this._config.getHttpConfig());
        this._repositoryFactory = new RepositoryFactory(this._nwc);
        this._gatewayFactory = new GatewayFactory(this._repositoryFactory);
    }

    get gatewayFactory() {
        return this._gatewayFactory;
    }
}