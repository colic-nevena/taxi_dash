import IGetDriversGateway from "../gateway/IGetDriversGateway";
import Driver from "../entity/Driver";
import StringId from "../../../base/valueObject/uniqueEntityID/StringId";

export class GetDriverByIdInteractorError extends Error {
    constructor(message: string) {
        super(`[GetDriverByIdUseCase] Error - ${message}`);
    }
}

export interface IGetDriverByIdInput {
    getDriverById(id: string): Promise<void>;
}

export interface IGetDriverOutput {
    displaySuccessResponse(driver: Driver): void;
    displayErrorResponse(error: Error): void;
}

export class GetDriverByIdInteractor implements IGetDriverByIdInput {

    constructor(
        private _output: IGetDriverOutput,
        private _gateway: IGetDriversGateway
    ) { }

    public async getDriverById(id: string): Promise<void> {
        try {
            await this.interact(StringId.create(id));
        } catch (e: any) {
            this._output.displayErrorResponse(new GetDriverByIdInteractorError(e.message));
        }
    }

    private async interact(id: StringId) {
        this._output.displaySuccessResponse(await this._gateway.getDriverById(id));
    }
}