import NotEmptyString from "../base/valueObject/NotEmptyString";
import { ValueObject } from "../base/valueObject/ValueObject";

export class NameError extends Error {
    constructor(message: string) {
        super(`[Name] Error - ${message}`);
    }
}

interface NameProps {
    firstName: NotEmptyString;
    lastName: NotEmptyString
}

export default class Name extends ValueObject<NameProps> {

    get firstName(): NotEmptyString {
        return this.props.firstName;
    }

    get lastName(): NotEmptyString {
        return this.props.lastName;
    }

    private constructor(props: NameProps) {
        super(props);
    }

    public static create(firstName: NotEmptyString, lastName: NotEmptyString): Name {
        return new Name({ firstName, lastName })
    }

    public equals(vo: ValueObject<NameProps>): boolean {
        return vo.props.firstName.equals(this.props.firstName) && vo.props.lastName.equals(this.props.lastName);
    }
}