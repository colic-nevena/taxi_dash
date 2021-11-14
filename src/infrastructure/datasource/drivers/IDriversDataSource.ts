export type DriverDTO = {

}

export default interface IDriversDatasource {
    getDrivers(): Promise<DriversList>;
}