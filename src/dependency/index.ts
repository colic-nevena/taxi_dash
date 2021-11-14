import Config from "../config/Config";
import GatewayFactory from "./GatewayFactory";
import RepositoryFactory from "./RepositoryFactory";

export class Dependency {
    private _config;
    private _gatewayFactory;
    private _repositoryFactory;

    constructor(env: any) {
        this._config = new Config(env);
        this._repositoryFactory = new RepositoryFactory();
        this._gatewayFactory = new GatewayFactory(this._repositoryFactory);
    }

    get gatewayFactory() {
        return this._gatewayFactory;
    }
}