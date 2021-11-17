import { BASE_ERROR } from "../../redux/base/BaseActionTypes";
import { GET_DRIVERS_ERROR } from "../../redux/driverList/DriverListActionTypes";
import { ErrorCodes } from "../error/ErrorCodes";
import ErrorProcessor from "../error/ErrorProcessor";

export default class DriverError {

    private _processor = new ErrorProcessor(
        this.format("Internal Server Error", BASE_ERROR),
        [
            {
                condition: (err) => err.message.includes('[getDrivers]'),
                value: () => this.format(ErrorCodes.GET_DRIVERS_ERROR, GET_DRIVERS_ERROR)
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