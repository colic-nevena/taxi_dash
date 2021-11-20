import { IGetVehiclesOutput } from "../../../domain/modules/vehicle/usecase/GetVehiclesUseCase";
import VehiclesList from "../../../domain/modules/vehicle/valueObject/VehiclesList";
import { GET_VEHICLES_SUCCESS } from "../../redux/vehicleList/VehicleListActionTypes";
import { IReduxDispatch } from "../IReduxDispatch";
import ReduxPresenter from "../ReduxPresenter";
import VehicleErrors from "./VehicleErrors";
import VehiclePresentation from "./presentation/VehiclePresentation";

export default class GetVehiclesPresenter extends ReduxPresenter implements IGetVehiclesOutput {
    constructor(dispatch: IReduxDispatch, private vehiclePresentation: VehiclePresentation) {
        super(dispatch, new VehicleErrors().processor);
    }

    displaySuccessResponse = (vehiclesList: VehiclesList): void => {
        const vehicleViewModelList = this.vehiclePresentation.presentVehicles(vehiclesList);

        this.dispatch({
            type: GET_VEHICLES_SUCCESS,
            payload: {
                vehiclesList: vehicleViewModelList
            }
        })
    }
}