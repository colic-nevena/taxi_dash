import Driver from "../../../domain/modules/driver/entity/Driver";
import { DriverDTO } from "../../datasource/drivers/IDriverDataSource";
import IMapper from "../../IMapper";
import DriverMapper from "./mapper/DriverMapper";
import DriverDataMapper from "./mapper/DriverDataMapper";
import IDriverMapperFactory from "./factory/IDriverMapperFactory";

export default class DriverMapperFactory implements IDriverMapperFactory {
  getDriverMapper(): IMapper<DriverDTO, Driver> {
    return new DriverMapper();
  }

  getDriverDataMapper(): IMapper<Driver, DriverDTO> {
    return new DriverDataMapper();
  }
}
