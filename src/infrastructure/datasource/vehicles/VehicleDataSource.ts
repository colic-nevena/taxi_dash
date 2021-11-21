import NetworkController from "../../network/NetworkController";
import IVehicleDataSource, { VehicleDTO } from "./IVehicleDataSource";

export class VehicleDataSourceError extends Error {
    constructor(message: string) {
        super(`[VehicleDataSource] Error - ${message}`);
    }
}

export default class VehicleDataSource implements IVehicleDataSource {
    constructor(private nwc: NetworkController) { }

    async getVehicles(): Promise<VehicleDTO[]> {
        try {
            // const vehicles: any = await this.nwc.request({
            //     url: "/vehicles",
            //     method: "GET",
            //     useToken: true
            // })
            // return vehicles.data;
            return this.getVehiclesMock();
        } catch (err: any) {
            throw new VehicleDataSourceError(`[getVehicle] - ${err.message}`)
        }
    }

    getVehiclesMock(): VehicleDTO[] {
        const result: VehicleDTO[] = [];
        for (let i = 0; i < 10; i++)
            result.push(this.getVehicleMock(i));
        return result;
    }

    getVehicleMock(i: number): VehicleDTO {
        return {
            id: `vehicle-id${i}`,
            type: i % 2 === 0 ? "private car" : "company car",
            licensePlate: `NI-${i}${i + 1}${i + 2}-AA`,
            meter: i * 10 + i + 200,
            latitude: 43.3209,
            longitude: 21.8954,
            fuel: 3,
            temperature: 20 + i,
            driverId: `taxidashdriver-id${i}`
        }
    }
}
