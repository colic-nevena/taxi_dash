import { BASE_ERROR } from "../../redux/base/BaseActionTypes";
import { GET_VEHICLES_ERROR } from "../../redux/vehicleList/VehicleListActionTypes";
import { ErrorCodes } from "../error/ErrorCodes";
import ErrorProcessor from "../error/ErrorProcessor";

export default class VehicleError {

    private _processor = new ErrorProcessor(
        this.format("Internal Server Error", BASE_ERROR),
        [
            {
                condition: (err) => err.message.includes('[getVehicles]'),
                value: () => this.format(ErrorCodes.GET_VEHICLES_ERROR, GET_VEHICLES_ERROR)
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