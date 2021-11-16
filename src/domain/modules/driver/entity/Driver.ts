import Entity from "../../../base/entity/Entity";
import NotEmptyString from "../../../base/valueObject/NotEmptyString";
import StringId from "../../../base/valueObject/uniqueEntityID/StringId";
import Address from "../../Address";
import Email from "../../Email";
import Name from "../../Name";

export class DriverError extends Error {
    constructor(message: string) {
        super(`[Driver] Error - ${message}`);
    }
}

interface DriverProps {
    name: Name;
    address: Address;
    email: Email;
    timeActive: number;
    status: NotEmptyString;
}

export default class Driver extends Entity<DriverProps, string> {
    get id(): StringId {
        return StringId.create(this._id.getId());
    }

    get name(): Name {
        return this.props.name;
    }

    get email(): Email {
        return this.props.email;
    }

    get address(): Address {
        return this.props.address;
    }

    get status(): NotEmptyString {
        return this.props.status;
    }

    get timeActive(): number {
        return this.props.timeActive;
    }

}