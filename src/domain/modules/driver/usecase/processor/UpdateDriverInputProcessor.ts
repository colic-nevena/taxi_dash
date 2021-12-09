import Driver from "../../entity/Driver";
import { DriverViewModel } from "../../../../../gui/presenter/driver/viewModel/DriverViewModel";
import NotEmptyString from "../../../../base/valueObject/NotEmptyString";
import StringId from "../../../../base/valueObject/uniqueEntityID/StringId";
import Address from "../../../Address";
import Email from "../../../Email";
import Name from "../../../Name";
import ZipCode from "../../../ZipCode";

export class UpdateDriverInputProcessorError extends Error {
  constructor(message: string) {
    super(`[DriverProcessor] Error - ${message}`);
  }
}

export default class UpdateDriverInputProcessor {
  static processData(input: DriverViewModel): Driver {
    const {
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
        StringId.create(id)
      );
    } catch (err: any) {
      throw new UpdateDriverInputProcessorError(err.message);
    }
  }
}
