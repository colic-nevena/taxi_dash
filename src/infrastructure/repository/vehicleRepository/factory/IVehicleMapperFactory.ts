import Vehicle from "../../../../domain/modules/vehicle/entity/Vehicle";
import { VehicleDTO } from "../../../datasource/vehicles/IVehicleDataSource";
import IMapper from "../../../IMapper";

export default interface IVehicleMapperFactory {
    getVehicleMapper(): IMapper<VehicleDTO, Vehicle>;
}