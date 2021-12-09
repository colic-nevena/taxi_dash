import NotEmptyString from "../../../../domain/base/valueObject/NotEmptyString";
import StringId from "../../../../domain/base/valueObject/uniqueEntityID/StringId";
import Address from "../../../../domain/modules/Address";
import Driver from "../../../../domain/modules/driver/entity/Driver";
import Email from "../../../../domain/modules/Email";
import Name from "../../../../domain/modules/Name";
import ZipCode from "../../../../domain/modules/ZipCode";
import { DriverDTO } from "../../../datasource/drivers/IDriverDataSource";
import IMapper from "../../../IMapper";

export class DriverMapperError extends Error {
  constructor(message: string) {
    super(`[DriverMapper] Error - ${message}`);
  }
}

export default class DriverMapper implements IMapper<DriverDTO, Driver> {
  map(input: DriverDTO): Driver {
    const {
      firstName,
      lastName,
      email,
      city,
      zipCode,
      street,
      status,
      timeActive,
      drivingLicense,
      registrationCertificate
    } = input;
    try {
      return new Driver(
        {
          name: Name.create(NotEmptyString.create(firstName), NotEmptyString.create(lastName)),
          email: Email.create(email),
          address: Address.create(
            NotEmptyString.create(street),
            ZipCode.create(zipCode),
            NotEmptyString.create(city)
          ),
          status: NotEmptyString.create(status),
          timeActive,
          drivingLicense: NotEmptyString.create(drivingLicense),
          registrationCertificate: NotEmptyString.create(registrationCertificate)
        },
        StringId.create(input.id)
      );
    } catch (err: any) {
      throw new DriverMapperError(err.message);
    }
  }
}
