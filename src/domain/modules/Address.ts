import NotEmptyString from "../base/valueObject/NotEmptyString";
import { ValueObject } from "../base/valueObject/ValueObject";
import ZipCode from "./ZipCode";

export class AddressError extends Error {
    constructor(message: string) {
        super(`[Address] Error - ${message}`)
    }
}

interface AddressProps {
    street: NotEmptyString;
    zipCode: ZipCode;
    city: NotEmptyString;
}

export default class Address extends ValueObject<AddressProps> {

    get city(): NotEmptyString {
        return this.props.city;
    }

    get street(): NotEmptyString {
        return this.props.street;
    }

    get zipCode(): ZipCode {
        return this.props.zipCode;
    }

    private constructor(props: AddressProps) {
        super(props);
    }

    public static create(street: NotEmptyString, zipCode: ZipCode, city: NotEmptyString): Address {
        return new Address({ street, zipCode, city });
    }

    public equals(vo: ValueObject<AddressProps>): boolean {
        if (vo.props.street.equals(this.props.street)
            && vo.props.zipCode.equals(this.props.zipCode)
            && vo.props.city.equals(this.props.city))
            return true;
        else return false;
    }
}