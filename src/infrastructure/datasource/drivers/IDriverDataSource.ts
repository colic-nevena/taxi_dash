export type DriverDTO = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  zipCode: string;
  street: string;
  timeActive: number;
  status: string;
  drivingLicense: string;
  registrationCertificate: string;
};

export default interface IDriversDataSource {
  getDrivers(): Promise<DriverDTO[]>;
  getDriverById(id: string): Promise<DriverDTO>;
  updateDriver(driverDTO: DriverDTO): Promise<DriverDTO>;
}
