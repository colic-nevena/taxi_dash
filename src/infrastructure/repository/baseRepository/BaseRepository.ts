import { MqttClient } from "mqtt";
import IBaseDatasource from "../../datasource/base/IBaseDatasource";
import IBaseRepository from "./IBaseRepository";

export class BaseRepositoryError extends Error {
    constructor(message: string) {
        super(`[BaseRepository] Error - ${message}`);
    }
}

export default class BaseRepository implements IBaseRepository {
    constructor(
        private _datasource: IBaseDatasource
    ) { }

    async connectMqtt(): Promise<MqttClient> {
        return await this._datasource.connectMqtt();
    }
}