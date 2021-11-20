export type VehicleDTO = {
    id: string;
    type: string;
    licensePlate: string;
    meter: number;
    latitude: number;
    longitude: number;
    fuel: number;
    temperature: number;
    driverId: string;
}

export default interface IVehicleDataSource {
    getVehicles(): Promise<VehicleDTO[]>;
}