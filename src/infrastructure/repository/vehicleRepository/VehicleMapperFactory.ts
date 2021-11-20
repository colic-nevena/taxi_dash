import Vehicle from "../../../domain/modules/vehicle/entity/Vehicle";
import { VehicleDTO } from "../../datasource/vehicles/IVehicleDataSource";
import IMapper from "../../IMapper";
import VehicleMapper from "./mapper/VehicleMapper";
import IVehicleMapperFactory from "./factory/IVehicleMapperFactory";

export default class VehicleMapperFactory implements IVehicleMapperFactory {
    getVehicleMapper(): IMapper<VehicleDTO, Vehicle> {
        return new VehicleMapper();
    }
}