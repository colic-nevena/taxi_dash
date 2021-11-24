import DriverList from "../../../../domain/modules/driver/valueObject/DriverList";
import IGetVehiclesGateway from "../../../../domain/modules/vehicle/gateway/IGetVehiclesGateway";
import VehicleList from "../../../../domain/modules/vehicle/valueObject/VehicleList";
import IDriverRepository from "../../driverRepository/IDriverRepository";
import IVehicleRepository from "../IVehicleRepository";

export class GetVehiclesGatewayError extends Error {
    constructor(message: string) {
        super(`[GetVehiclesGateway] Error - ${message}`);
    }
}

export default class GetVehiclesGateway implements IGetVehiclesGateway {
    constructor(
        private _vehicleRepository: IVehicleRepository,
        private _driverRepository: IDriverRepository
    ) { }

    public async getVehicles(): Promise<VehicleList> {
        try {
            return await this._vehicleRepository.getVehicles();
        } catch (e: any) {
            throw new GetVehiclesGatewayError(`[getVehicles] - ${e.message}`);
        }
    }

    public async getDrivers(): Promise<DriverList> {
        try {
            return await this._driverRepository.getDrivers();
        } catch (e: any) {
            throw new GetVehiclesGatewayError(`[getVehicles] - ${e.message}`);
        }
    }

}