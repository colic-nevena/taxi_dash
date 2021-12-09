import { IGetDriversOutput } from "../../../domain/modules/driver/usecase/GetDriversUseCase";
import DriverList from "../../../domain/modules/driver/valueObject/DriverList";
import { GET_DRIVERS_SUCCESS } from "../../redux/driverList/DriverListActionTypes";
import { IReduxDispatch } from "../IReduxDispatch";
import ReduxPresenter from "../ReduxPresenter";
import DriverErrors from "./DriverErrors";
import DriverPresentation from "./presentation/DriverPresentation";

export default class GetDriversPresenter extends ReduxPresenter implements IGetDriversOutput {
    constructor(dispatch: IReduxDispatch, private driverPresentation: DriverPresentation) {
        super(dispatch, new DriverErrors().processor);
    }

    displaySuccessResponse = (driverList: DriverList): void => {
        const driverViewModelList = this.driverPresentation.presentDrivers(driverList);

        this.dispatch({
            type: GET_DRIVERS_SUCCESS,
            payload: {
                driverList: driverViewModelList
            }
        })
    }
}