import NetworkController from "../../network/NetworkController";
import IDriversDataSource, { DriverDTO } from "./IDriverDataSource";

export class DriverDataSourceError extends Error {
    constructor(message: string) {
        super(`[DriverDataSource] Error - ${message}`);
    }
}

export default class DriverDataSource implements IDriversDataSource {
    constructor(private nwc: NetworkController) { }

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
            throw new DriverDataSourceError(`[getDrivers] - ${err.message}`)
        }
    }

    async getDriversMock(): Promise<DriverDTO[]> {
        const result: DriverDTO[] = [];
        for (let i = 0; i < 10; i++)
            result.push(await this.getDriverMock(i));
        return result;
    }

    async getDriverMock(i: number): Promise<DriverDTO> {
        return {
            id: `TaxiDashDriver-${i}`,
            firstName: "Pera",
            lastName: "Peric",
            city: "Nis",
            zipCode: "18000",
            street: "Vojvode Misica 105b",
            timeActive: i,
            status: i % 2 === 0 ? "active" : i % 3 === 0 ? "break" : "not-working"
        }
    }
}