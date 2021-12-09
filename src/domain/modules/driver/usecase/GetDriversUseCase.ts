import IGetDriversGateway from "../gateway/IGetDriversGateway";
import DriverList from "../valueObject/DriverList";

export class GetDriversInteractorError extends Error {
    constructor(message: string) {
        super(`[GetDriversUseCase] Error - ${message}`);
    }
}

export interface IGetDriversInput {
    getDrivers(): Promise<void>;
}

export interface IGetDriversOutput {
    displaySuccessResponse(driverList: DriverList): void;
    displayErrorResponse(error: Error): void;
}

export class GetDriversInteractor implements IGetDriversInput {

    constructor(
        private _output: IGetDriversOutput,
        private _gateway: IGetDriversGateway
    ) { }

    public async getDrivers(): Promise<void> {
        try {
            await this.interact();
        } catch (e: any) {
            this._output.displayErrorResponse(new GetDriversInteractorError(e.message));
        }
    }

    private async interact() {
        this._output.displaySuccessResponse(await this._gateway.getDrivers());
    }
}