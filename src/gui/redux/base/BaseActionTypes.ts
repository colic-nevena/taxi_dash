import { MqttClient } from "mqtt";

export const BASE_SET_FLAGS = "BASE_SET_FLAGS";
export const BASE_ERROR = "BASE_ERROR";
export const BASE_SNACK_CLOSE = "BASE_SNACK_CLOSE";
export const BASE_SNACK_OPEN = "BASE_SNACK_OPEN";
export const MQTT_CONNECT_SUCCESS = "MQTT_CONNECT_SUCCESS";
export const MQTT_CONNECT_ERROR = "MQTT_CONNECT_ERROR";

interface BaseSetFlags {
    type: typeof BASE_SET_FLAGS,
    payload: {
        signedIn: boolean;
        ready: boolean;
    }
}

interface BaseError {
    type: typeof BASE_ERROR,
    payload: {
        errorMessage: string
    }
}

interface BaseSnackClose {
    type: typeof BASE_SNACK_CLOSE;
}

interface BaseSnackOpen {
    type: typeof BASE_SNACK_OPEN;
    payload: {
        snackText: string;
    };
}

interface ConnectMqttSuccess {
    type: typeof MQTT_CONNECT_SUCCESS,
    payload: {
        mqttClient: MqttClient
    }
}

interface ConnectMqttError {
    type: typeof MQTT_CONNECT_ERROR,
    payload: {
        errorMessage: string
    }
}


export type BaseActionTypes = BaseSetFlags | BaseError | BaseSnackClose
    | BaseSnackOpen | ConnectMqttSuccess | ConnectMqttError;