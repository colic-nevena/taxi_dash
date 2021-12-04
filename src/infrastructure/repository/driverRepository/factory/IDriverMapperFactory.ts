import Driver from "../../../../domain/modules/driver/entity/Driver";
import { DriverDTO } from "../../../datasource/drivers/IDriverDataSource";
import IMapper from "../../../IMapper";

export default interface IDriverMapperFactory {
  getDriverMapper(): IMapper<DriverDTO, Driver>;
  getDriverDataMapper(): IMapper<Driver, DriverDTO>;
}
