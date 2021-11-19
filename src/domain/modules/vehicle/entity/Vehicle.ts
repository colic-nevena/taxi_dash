import Entity from "../../../base/entity/Entity";
import NotEmptyString from "../../../base/valueObject/NotEmptyString";
import StringId from "../../../base/valueObject/uniqueEntityID/StringId";
import GPS from "../../GPS";

export class VehicleError extends Error {
    constructor(message: string) {
        super(`[Vehicle] Error - ${message}`);
    }
}

interface VehicleProps {
    type: NotEmptyString;
    licensePlate: NotEmptyString;
    meter: number;
    gps: GPS;
    fuel: number;
    temperature: number;
    driverId: StringId;
}

export default class Vehicle extends Entity<VehicleProps, string> {
    get id(): StringId {
        return StringId.create(this._id.getId());
    }

    get type(): NotEmptyString {
        return this.props.type;
    }

    get licensePlate(): NotEmptyString {
        return this.props.licensePlate;
    }

    get meter(): number {
        return this.props.meter;
    }

    get gps(): GPS {
        return this.props.gps;
    }

    get fuel(): number {
        return this.props.fuel;
    }

    get temperature(): number {
        return this.props.temperature;
    }

    get driverId(): StringId {
        return this.props.driverId;
    }
}