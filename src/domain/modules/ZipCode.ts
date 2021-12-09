import NotEmptyString from "../base/valueObject/NotEmptyString";
import { ValueObject } from "../base/valueObject/ValueObject";

export class ZipCodeError extends Error {
    constructor(message: string) {
        super(`[ZipCode] Error - ${message}`);
    }
}

interface ZipCodeProps {
    code: NotEmptyString;
}

export default class ZipCode extends ValueObject<ZipCodeProps> {

    get value(): string {
        return this.props.code.value;
    }

    private constructor(props: ZipCodeProps) {
        super(props);
    }

    public static create(code: string): ZipCode {
        if (!ZipCode.validate(code))
            throw new ZipCodeError(`ZipCode must contains only digits. Provided: ${code}`);
        
        return new ZipCode({ code: NotEmptyString.create(code) });
    }

    private static validate(code: string): boolean {
        return !isNaN(parseInt(code));
    }

    public equals(vo: ValueObject<ZipCodeProps>): boolean {
        return vo.props.code.equals(this.props.code);
    }
}