import Vehicle from "../../../../domain/modules/vehicle/entity/Vehicle";
import VehicleList from "../../../../domain/modules/vehicle/valueObject/VehicleList";
import IMapper from "../../../../infrastructure/IMapper";
import { VehicleViewModel } from "../viewModel/VehicleViewModel";

export default class VehiclePresentation implements IMapper<Vehicle, VehicleViewModel> {
    presentVehicles(VehicleList: VehicleList) {
        const result: VehicleViewModel[] = [];
        VehicleList.vehicles.map(vehicle => result.push(this.map(vehicle)));
        
        return result;
    }

    map(vehicle: Vehicle): VehicleViewModel {
        const { id, type, licensePlate, meter, gps, fuel,
            temperature, driverId } = vehicle;

        return {
            id: id.getId(),
            type: type.value,
            licensePlate: licensePlate.value,
            meter: meter,
            latitude: gps.latitude,
            longitude: gps.longitude,
            fuel: fuel,
            temperature: temperature,
            driverId: driverId.getId()
        }
    }
}