import { BASE_ERROR, MQTT_CONNECT_ERROR } from "../../redux/base/BaseActionTypes";
import { ErrorCodes } from "../error/ErrorCodes";
import ErrorProcessor from "../error/ErrorProcessor";

export default class DriverError {

    private _processor = new ErrorProcessor(
        this.format("Internal Server Error", BASE_ERROR),
        [
            {
                condition: (err) => err.message.includes('[connectMqtt]'),
                value: () => this.format(ErrorCodes.MQTT_CONNECT_ERROR, MQTT_CONNECT_ERROR)
            },
        ]
    )

    get processor() {
        return this._processor;
    }

    private format(message: string, actionType: string) {
        return { message, actionType };
    }
}