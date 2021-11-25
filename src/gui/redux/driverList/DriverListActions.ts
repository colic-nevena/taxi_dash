import { Dispatch } from "redux";
import { dependencyContainer } from "../../..";
import { GetDriversInteractor } from "../../../domain/modules/driver/usecase/GetDriversUseCase";
import GetDriversPresenter from "../../presenter/driver/GetDriversPresenter";
import DriverPresentation from "../../presenter/driver/presentation/DriverPresentation";
import ReduxDispatch from "../../presenter/ReduxDispatch";
import { RootStore } from "../Store";
import { GET_DRIVERS_LOADING } from "./DriverListActionTypes";

export const GetDrivers = () => async (dispatch: Dispatch, getState: () => RootStore) => {
    dispatch({
        type: GET_DRIVERS_LOADING
    });

    const gateway = dependencyContainer.dependency.gatewayFactory.getGetDriversGateway();
    new GetDriversInteractor(new GetDriversPresenter(new ReduxDispatch(dispatch), new DriverPresentation()), gateway)
        .getDrivers();
}   