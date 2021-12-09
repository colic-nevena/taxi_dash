import { Dispatch } from "redux";
import { dependencyContainer } from "../../..";
import { GetVehiclesInteractor } from "../../../domain/modules/vehicle/usecase/GetVehiclesUseCase";
import GetVehiclesPresenter from "../../presenter/vehicle/GetVehiclesPresenter";
import VehiclePresentation from "../../presenter/vehicle/presentation/VehiclePresentation";
import ReduxDispatch from "../../presenter/ReduxDispatch";
import { RootStore } from "../Store";
import { GET_VEHICLES_LOADING } from "./VehicleListActionTypes";

export const GetVehicles = () => async (dispatch: Dispatch, getState: () => RootStore) => {
  dispatch({
    type: GET_VEHICLES_LOADING
  });

  const gateway = dependencyContainer.dependency.gatewayFactory.getGetVehiclesGateway();
  new GetVehiclesInteractor(
    new GetVehiclesPresenter(new ReduxDispatch(dispatch), new VehiclePresentation()),
    gateway
  ).getVehicles();
};
