import DriverList from "../../driver/valueObject/DriverList";
import IGetVehiclesGateway from "../gateway/IGetVehiclesGateway";
import VehicleList from "../valueObject/VehicleList";

export class GetVehiclesInteractorError extends Error {
    constructor(message: string) {
        super(`[GetVehiclesUseCase] Error - ${message}`);
    }
}

export interface IGetVehiclesInput {
    getVehicles(): Promise<void>;
}

export interface IGetVehiclesOutput {
    displaySuccessResponse(vehicleList: VehicleList, driverList: DriverList): void;
    displayErrorResponse(error: Error): void;
}

export class GetVehiclesInteractor implements IGetVehiclesInput {

    constructor(
        private _output: IGetVehiclesOutput,
        private _gateway: IGetVehiclesGateway
    ) { }

    public async getVehicles(): Promise<void> {
        try {
            await this.interact();
        } catch (e: any) {
            this._output.displayErrorResponse(new GetVehiclesInteractorError(e.message));
        }
    }

    private async interact() {
        const vehicles = await this._gateway.getVehicles();
        const drivers = await this._gateway.getDrivers();
        this._output.displaySuccessResponse(vehicles, drivers);
    }
}