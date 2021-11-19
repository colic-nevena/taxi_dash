import { ValueObject } from "../base/valueObject/ValueObject";

export class GPSError extends Error {
    constructor(message: string) {
        super(`[GPS] Error - ${message}`);
    }
}

interface GPSProps {
    latitude: number;
    longitude: number;
}

export default class GPS extends ValueObject<GPSProps> {
    get latitude(): number {
        return this.props.latitude;
    }

    get longitude(): number {
        return this.props.longitude;    
    }

    private constructor(props: GPSProps) {
        super(props);
    }

    public static create(latitude: number, longitude: number): GPS {
        return new GPS({ latitude, longitude })
    }

    public equals(vo: ValueObject<GPSProps>): boolean {
        return vo.props.latitude===this.props.latitude && vo.props.longitude===this.props.longitude;
    }
}