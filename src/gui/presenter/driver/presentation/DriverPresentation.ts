import Driver from "../../../../domain/modules/driver/entity/Driver";
import DriverList from "../../../../domain/modules/driver/valueObject/DriversList";
import IMapper from "../../../../infrastructure/IMapper";
import { DriverViewModel } from "../viewModel/DriverViewModel";

export default class DriverPresentation implements IMapper<Driver, DriverViewModel> {
    presentDrivers(driverList: DriverList) {
        const result: DriverViewModel[] = [];
        driverList.drivers.map(driver => result.push(this.map(driver)));
        
        return result;
    }

    map(driver: Driver): DriverViewModel {
        const { id, name, address, timeActive, status, email,
            drivingLicense, registrationCertificate } = driver;

        return {
            id: id.getId(),
            email: email.value,
            firstName: name.firstName.value,
            lastName: name.lastName.value,
            zipCode: address.zipCode.value,
            city: address.city.value,
            street: address.street.value,
            status: status.value,
            drivingLicense: drivingLicense.value,
            registrationCertificate: registrationCertificate.value,
            timeActive
        }
    }
}