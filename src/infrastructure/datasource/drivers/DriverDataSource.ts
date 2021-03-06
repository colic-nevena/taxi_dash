import NetworkController from "../../network/NetworkController";
import IDriversDataSource, { DriverDTO } from "./IDriverDataSource";

export class DriverDataSourceError extends Error {
  constructor(message: string) {
    super(`[DriverDataSource] Error - ${message}`);
  }
}

export default class DriverDataSource implements IDriversDataSource {
  constructor(private nwc: NetworkController) {}

  async updateDriver(driverDTO: DriverDTO): Promise<DriverDTO> {
    try {
      return driverDTO;
    } catch (err: any) {
      throw new DriverDataSourceError(`[updateDriver] - ${err.message}`);
    }
  }

  async getDriverById(id: string): Promise<DriverDTO> {
    try {
      const drivers = this.getDriversMock();
      const driver = drivers.filter((d) => d.id === id);
      return driver[0];
    } catch (err: any) {
      throw new DriverDataSourceError(`[getDriverById] - ${err.message}`);
    }
  }

  async getDrivers(): Promise<DriverDTO[]> {
    try {
      // const drivers: any = await this.nwc.request({
      //     url: "/drivers",
      //     method: "GET",
      //     useToken: true
      // })
      // return drivers.data;
      return this.getDriversMock();
    } catch (err: any) {
      throw new DriverDataSourceError(`[getDrivers] - ${err.message}`);
    }
  }

  getDriversMock(): DriverDTO[] {
    const result: DriverDTO[] = [];
    for (let i = 0; i < 10; i++) result.push(this.getDriverMock(i));
    return result;
  }

  getDriverMock(i: number): DriverDTO {
    return {
      id: `taxidashdriver-id${i}`,
      firstName: "Pera",
      lastName: "Peric",
      email: "peraperic@gmail.com",
      city: "Nis",
      zipCode: "18000",
      street: "Vojvode Misica 105b",
      timeActive: i + 1,
      status: i % 2 === 0 ? "Active" : i % 3 === 0 ? "Break" : "Not-working",
      drivingLicense: `${i}${i + 1}abc${i * 2}${i + 3}${i * 4}`,
      registrationCertificate: `lorem ipsum ${i}${i + 1}${i + 2}`
    };
  }
}
