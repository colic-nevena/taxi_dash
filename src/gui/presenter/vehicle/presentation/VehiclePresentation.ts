import Driver from "../../../../domain/modules/driver/entity/Driver";
import DriverList from "../../../../domain/modules/driver/valueObject/DriverList";
import Vehicle from "../../../../domain/modules/vehicle/entity/Vehicle";
import VehicleList from "../../../../domain/modules/vehicle/valueObject/VehicleList";
import IJoiner from "../../IJoiner";
import { VehicleViewModel } from "../viewModel/VehicleViewModel";

export default class VehiclePresentation implements IJoiner<Vehicle, Driver, VehicleViewModel> {
    presentVehicles(vehicleList: VehicleList, driverList: DriverList) {
        const result: VehicleViewModel[] = [];

        vehicleList.vehicles.forEach(vehicle => {
            driverList.drivers.forEach(driver => {
                if (driver.id.equals(vehicle.driverId)) {
                    result.push(this.join(vehicle, driver))
                }
            })
        });
        console.log(result)
        return result;
    }

    join(vehicle: Vehicle, driver: Driver): VehicleViewModel {
        const { id, type, licensePlate, meter, gps, fuel, temperature, driverId } = vehicle;

        return {
            id: id.getId(),
            type: type.value,
            licensePlate: licensePlate.value,
            meter: meter,
            latitude: gps.latitude,
            longitude: gps.longitude,
            fuel: fuel,
            temperature: temperature,
            driverId: driverId.getId(),
            driversHours: driver.timeActive
        }
    }
}