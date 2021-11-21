import { IGetVehiclesOutput } from "../../../domain/modules/vehicle/usecase/GetVehiclesUseCase";
import VehicleList from "../../../domain/modules/vehicle/valueObject/VehicleList";
import { GET_VEHICLES_SUCCESS } from "../../redux/vehicleList/VehicleListActionTypes";
import { IReduxDispatch } from "../IReduxDispatch";
import ReduxPresenter from "../ReduxPresenter";
import VehicleErrors from "./VehicleErrors";
import VehiclePresentation from "./presentation/VehiclePresentation";

export default class GetVehiclesPresenter extends ReduxPresenter implements IGetVehiclesOutput {
    constructor(dispatch: IReduxDispatch, private vehiclePresentation: VehiclePresentation) {
        super(dispatch, new VehicleErrors().processor);
    }

    displaySuccessResponse = (vehicleList: VehicleList): void => {
        const vehicleViewModelList = this.vehiclePresentation.presentVehicles(vehicleList);

        this.dispatch({
            type: GET_VEHICLES_SUCCESS,
            payload: {
                vehicleList: vehicleViewModelList
            }
        })
    }
}