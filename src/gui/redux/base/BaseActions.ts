import { Dispatch } from "redux";
import { BASE_SNACK_CLOSE, BASE_SNACK_OPEN } from "./BaseActionTypes";

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