import IGetDriversGateway from "../gateway/IGetDriversGateway";
import Driver from "../entity/Driver";
import { DriverViewModel } from "../../../../gui/presenter/driver/viewModel/DriverViewModel";
import UpdateDriverInputProcessor from "./processor/UpdateDriverInputProcessor";

export class UpdateDriverInteractorError extends Error {
  constructor(message: string) {
    super(`[UpdateDriverUseCase] Error - ${message}`);
  }
}

export interface IUpdateDriverInput {
  updateDriver(driver: DriverViewModel): Promise<void>;
}

export interface IUpdateDriverOutput {
  displaySuccessResponse(driver: Driver): void;
  displayErrorResponse(error: Error): void;
}

export class UpdateDriverInteractor implements IUpdateDriverInput {
  constructor(private _output: IUpdateDriverOutput, private _gateway: IGetDriversGateway) {}

  public async updateDriver(driver: DriverViewModel): Promise<void> {
    try {
      await this.interact(UpdateDriverInputProcessor.processData(driver));
    } catch (e: any) {
      this._output.displayErrorResponse(new UpdateDriverInteractorError(e.message));
    }
  }

  private async interact(driver: Driver) {
    this._output.displaySuccessResponse(await this._gateway.updateDriver(driver));
  }
}
