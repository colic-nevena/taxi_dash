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
    displaySuccessResponse(vehicleList: VehicleList): void;
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
        this._output.displaySuccessResponse(await this._gateway.getVehicles());
    }
}