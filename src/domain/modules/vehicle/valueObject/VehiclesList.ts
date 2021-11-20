import { ValueObject } from "../../../base/valueObject/ValueObject";
import Vehicle from "../entity/Vehicle";

export class VehicleListError extends Error {
    constructor(message: string) {
        super(`[VehicleList] Error - ${message}`)
    }
}

interface VehicleListProps {
    vehicles: Vehicle[]
}

export default class VehicleList extends ValueObject<VehicleListProps> {
    get vehicles(): Vehicle[] {
        return this.props.vehicles
    }

    private constructor(props: VehicleListProps) {
        super(props)
    }

    public static create(vehicles: Vehicle[]): VehicleList {
        if (!vehicles)
            throw new VehicleListError('Vehicle list must not be undefined')        
        return new VehicleList({ vehicles })
    }

    public equals(vo: ValueObject<VehicleListProps>): boolean {

        if (this.props.vehicles.length !== vo.props.vehicles.length)
            return false

        const result = this.props.vehicles.filter(o1 => vo.props.vehicles.some(o2 => o1.id.isEqual(o2.id)));
       
        return result.length === this.props.vehicles.length
    }
}