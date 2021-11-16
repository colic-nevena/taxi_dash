export type DriverDTO = {
    id: string;
    firstName: string;
    lastName: string;
    city: string;
    zipCode: string;
    street: string;
    timeActive: number;
    status: string;
}

export default interface IDriversDataSource {
    getDrivers(): Promise<DriverDTO[]>;
}