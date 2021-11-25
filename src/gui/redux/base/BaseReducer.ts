import { MqttClient } from "mqtt";
import { BaseActionTypes, BASE_ERROR, BASE_SNACK_CLOSE, BASE_SNACK_OPEN, MQTT_CONNECT_ERROR, MQTT_CONNECT_SUCCESS } from "../base/BaseActionTypes";
import { BASE_SET_FLAGS } from "../base/BaseActionTypes";

interface BaseState {
    ready: boolean;
    signedIn: boolean;
    error?: string;
    snackOpen: boolean;
    snackText: string;
    mqttClient?: MqttClient;
}

const defaultState: BaseState = {
    ready: false,
    signedIn: false,
    snackOpen: false,
    snackText: ""
}

const baseReducer = (state: BaseState = defaultState, action: BaseActionTypes): BaseState => {
    switch (action.type) {
        case BASE_SET_FLAGS:
            return { ...state, ready: action.payload.ready, signedIn: action.payload.signedIn };

        case BASE_ERROR:
        case MQTT_CONNECT_ERROR:
            return { ...state, error: action.payload.errorMessage };

        case BASE_SNACK_CLOSE:
            return { ...state, snackOpen: false, snackText: "" };

        case BASE_SNACK_OPEN:
            return { ...state, snackOpen: true, snackText: action.payload.snackText };

        case MQTT_CONNECT_SUCCESS:
            return { ...state, mqttClient: action.payload.mqttClient };

        default:
            return state;
    }
}

export default baseReducer;