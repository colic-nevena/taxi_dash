import { IGetDriverOutput } from "../../../domain/modules/driver/usecase/GetDriverByIdUseCase";
import Driver from "../../../domain/modules/driver/entity/Driver";
import { GET_DRIVER_BY_ID_SUCCESS } from "../../redux/driver/DriverActionTypes";
import { IReduxDispatch } from "../IReduxDispatch";
import ReduxPresenter from "../ReduxPresenter";
import DriverErrors from "./DriverErrors";
import DriverPresentation from "./presentation/DriverPresentation";

export default class GetDriverByIdPresenter extends ReduxPresenter implements IGetDriverOutput {
    constructor(dispatch: IReduxDispatch, private driverPresentation: DriverPresentation) {
        super(dispatch, new DriverErrors().processor);
    }

    displaySuccessResponse = (driver: Driver): void => {
        const driverViewModel = this.driverPresentation.map(driver);

        this.dispatch({
            type: GET_DRIVER_BY_ID_SUCCESS,
            payload: {
                driver: driverViewModel
            }
        })
    }
}