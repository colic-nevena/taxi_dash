import { Dispatch } from "redux";
import { dependencyContainer } from "../../..";
import { GetDriverByIdInteractor } from "../../../domain/modules/driver/usecase/GetDriverByIdUseCase";
import GetDriversPresenter from "../../presenter/driver/GetDriverByIdPresenter";
import DriverPresentation from "../../presenter/driver/presentation/DriverPresentation";
import ReduxDispatch from "../../presenter/ReduxDispatch";
import { DriverInputsModel, DRIVER_CHANGE_INPUTS, DRIVER_LOADING } from "./DriverActionTypes";

export const OnChangeInputs = (payload: DriverInputsModel) => (dispatch: Dispatch) => {
  dispatch({
    type: DRIVER_CHANGE_INPUTS,
    payload
  });
};

export const GetDriverById = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: DRIVER_LOADING
  });

  const gateway = dependencyContainer.dependency.gatewayFactory.getGetDriversGateway();
  new GetDriverByIdInteractor(
    new GetDriversPresenter(new ReduxDispatch(dispatch), new DriverPresentation()),
    gateway
  ).getDriverById(id);
};
