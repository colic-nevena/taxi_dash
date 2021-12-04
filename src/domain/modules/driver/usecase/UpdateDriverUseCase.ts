import IGetDriversGateway from "../gateway/IGetDriversGateway";
import Driver from "../entity/Driver";
import DriverProcessor from "./processor/UpdateDriverInputProcesor";

export class UpdateDriverInteractorError extends Error {
  constructor(message: string) {
    super(`[UpdateDriverUseCase] Error - ${message}`);
  }
}

export interface IUpdateDriverInput {
  updateDriver(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    city: string,
    zipCode: string,
    street: string,
    timeActive: number,
    status: string,
    drivingLicense: string,
    registrationCertificate: string
  ): Promise<void>;
}

export interface IUpdateDriverOutput {
  displaySuccessResponse(driver: Driver): void;
  displayErrorResponse(error: Error): void;
}

export class UpdateDriverInteractor implements IUpdateDriverInput {
  constructor(private _output: IUpdateDriverOutput, private _gateway: IGetDriversGateway) {}

  public async updateDriver(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    city: string,
    zipCode: string,
    street: string,
    timeActive: number,
    status: string,
    drivingLicense: string,
    registrationCertificate: string
  ): Promise<void> {
    try {
      let driver: Driver = DriverProcessor.processData({
        id,
        firstName,
        lastName,
        email,
        city,
        zipCode,
        street,
        timeActive,
        status,
        drivingLicense,
        registrationCertificate
      });
      await this.interact(driver);
    } catch (e: any) {
      this._output.displayErrorResponse(new UpdateDriverInteractorError(e.message));
    }
  }

  private async interact(driver: Driver) {
    this._output.displaySuccessResponse(await this._gateway.updateDriver(driver));
  }
}
