import { ValueObject } from "../../../base/valueObject/ValueObject";
import Driver from "../entity/Driver";

export class DriverListError extends Error {
    constructor(message: string) {
        super(`[DriverList] Error - ${message}`)
    }
}

interface DriverListProps {
    drivers: Driver[]
}

export default class DriverList extends ValueObject<DriverListProps> {
    get drivers(): Driver[] {
        return this.props.drivers
    }

    private constructor(props: DriverListProps) {
        super(props)
    }

    public static create(drivers: Driver[]): DriverList {
        if (!drivers)
            throw new DriverListError('Driver list must not be undefined')        
        return new DriverList({ drivers })
    }

    public equals(vo: ValueObject<DriverListProps>): boolean {

        if (this.props.drivers.length !== vo.props.drivers.length)
            return false

        const result = this.props.drivers.filter(o1 => vo.props.drivers.some(o2 => o1.id.isEqual(o2.id)));
       
        return result.length === this.props.drivers.length
    }
}