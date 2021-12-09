import { Dispatch } from "redux";
import { dependencyContainer } from "../../..";
import { ConnectMqttInteractor } from "../../../domain/base/useCase/ConnectMqttUseCase";
import ConnectMqttPresenter from "../../presenter/base/ConnectMqttPresenter";
import ReduxDispatch from "../../presenter/ReduxDispatch";
import { RootStore } from "../Store";
import { BASE_SNACK_CLOSE, BASE_SNACK_OPEN } from "./BaseActionTypes";

export const ConnectMqtt = () => async (dispatch: Dispatch, getState: () => RootStore) => {
    const gateway = dependencyContainer.dependency.gatewayFactory.getConnectMqttGateway();
    new ConnectMqttInteractor(new ConnectMqttPresenter(new ReduxDispatch(dispatch)), gateway)
        .connectMqtt();
}

export const SnackClose = () => (dispatch: Dispatch) => {
    dispatch({
        type: BASE_SNACK_CLOSE,
    })
}

export const SnackOpen = (snackText: string) => (dispatch: Dispatch) => {
    dispatch({
        type: BASE_SNACK_OPEN,
        payload: {
            snackText
        }
    })
}