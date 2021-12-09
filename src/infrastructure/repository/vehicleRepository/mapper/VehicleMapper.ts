import NotEmptyString from "../../../../domain/base/valueObject/NotEmptyString";
import StringId from "../../../../domain/base/valueObject/uniqueEntityID/StringId";
import Vehicle from "../../../../domain/modules/vehicle/entity/Vehicle";
import IMapper from "../../../IMapper";
import { VehicleDTO } from "../../../datasource/vehicles/IVehicleDataSource";
import GPS from "../../../../domain/modules/GPS";

export class VehicleMapperError extends Error {
    constructor(message: string) {
        super(`[VehicleMapper] Error - ${message}`);
    }
}

export default class VehicleMapper implements IMapper<VehicleDTO, Vehicle> {
    map(input: VehicleDTO): Vehicle {
        const { type, licensePlate, meter, latitude, longitude, fuel, 
            temperature, driverId } = input;
        try {
            return new Vehicle({
                type: NotEmptyString.create(type),
                licensePlate: NotEmptyString.create(licensePlate),
                meter,
                gps: GPS.create(latitude, longitude),
                fuel,
                temperature,
                driverId: StringId.create(driverId)
            }, StringId.create(input.id));
        } catch (err: any) {
            throw new VehicleMapperError(err.message)
        }
    }
}