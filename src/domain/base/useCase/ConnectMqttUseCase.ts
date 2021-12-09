import { MqttClient } from "mqtt";
import IConnectMqttGateway from "../gateway/IConnectMqttGateway";

export class ConnectMqttInteractorError extends Error {
    constructor(message: string) {
        super(`[ConnectMqttUseCase] Error - ${message}`);
    }
}

export interface IConnectMqttInput {
    connectMqtt(): Promise<void>;
}

export interface IConnectMqttOutput {
    displaySuccessResponse(mqttClient: MqttClient): void;
    displayErrorResponse(error: Error): void;
}

export class ConnectMqttInteractor implements IConnectMqttInput {
    constructor(
        private _output: IConnectMqttOutput,
        private _gateway: IConnectMqttGateway
    ) { }

    public async connectMqtt(): Promise<void> {
        try {
            await this.interact();
        } catch (e: any) {
            this._output.displayErrorResponse(new ConnectMqttInteractorError(e.message));
        }
    }

    private async interact() {
        this._output.displaySuccessResponse(await this._gateway.connectMqtt());
    }
}