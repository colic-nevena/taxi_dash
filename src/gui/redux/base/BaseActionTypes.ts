export const BASE_SET_FLAGS = "BASE_SET_FLAGS";
export const BASE_ERROR = "BASE_ERROR";
export const BASE_SNACK_CLOSE = "BASE_SNACK_CLOSE";
export const BASE_SNACK_OPEN = "BASE_SNACK_OPEN";

interface BaseSetFlags {
    type: typeof BASE_SET_FLAGS,
    payload: {
        signedIn: boolean;
        ready: boolean;
    }
}

interface BaseError {
    type: typeof BASE_ERROR,
    payload: {
        errorMessage: string
    }
}

interface BaseSnackClose {
    type: typeof BASE_SNACK_CLOSE;
}

interface BaseSnackOpen {
    type: typeof BASE_SNACK_OPEN;
    payload: {
        snackText: string;
    };
}


export type BaseActionTypes = BaseSetFlags | BaseError | BaseSnackClose | BaseSnackOpen;