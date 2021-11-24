import { MqttClient } from "mqtt";
import { IConnectMqttOutput } from "../../../domain/base/useCase/ConnectMqttUseCase";
import { MQTT_CONNECT_SUCCESS } from "../../redux/base/BaseActionTypes";
import { IReduxDispatch } from "../IReduxDispatch";
import ReduxPresenter from "../ReduxPresenter";
import MqttConnectErrors from "./MqttConnectErrors";

export default class ConnectMqttPresenter extends ReduxPresenter implements IConnectMqttOutput {
    constructor(dispatch: IReduxDispatch) {
        super(dispatch, new MqttConnectErrors().processor);
    }

    displaySuccessResponse = (mqttClient: MqttClient): void => {
        this.dispatch({
            type: MQTT_CONNECT_SUCCESS,
            payload: {
                mqttClient
            }
        })
    }
}