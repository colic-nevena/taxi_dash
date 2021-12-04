import Driver from "../../../../domain/modules/driver/entity/Driver";
import { DriverDTO } from "../../../datasource/drivers/IDriverDataSource";
import IMapper from "../../../IMapper";

export class DriverDataMapperError extends Error {
  constructor(message: string) {
    super(`[DriverDataMapper] Error - ${message}`);
  }
}

export default class DriverDataMapper implements IMapper<Driver, DriverDTO> {
  map(input: Driver): DriverDTO {
    const {
      id,
      name,
      email,
      address,
      timeActive,
      status,
      drivingLicense,
      registrationCertificate
    } = input;
    try {
      return {
        id: id.getId(),
        firstName: name.firstName.value,
        lastName: name.lastName.value,
        email: email.value,
        city: address.city.value,
        zipCode: address.zipCode.value,
        street: address.street.value,
        timeActive: timeActive,
        status: status.value,
        drivingLicense: drivingLicense.value,
        registrationCertificate: registrationCertificate.value
      };
    } catch (err: any) {
      throw new DriverDataMapperError(err.message);
    }
  }
}
