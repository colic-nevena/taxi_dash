import { AnyAction } from "redux";
import ErrorProcessor from "./error/ErrorProcessor";
import { IReduxDispatch } from "./IReduxDispatch";

export default class ReduxPresenter {
    private errorProcessor!: ErrorProcessor;

    constructor(private _dispatch: IReduxDispatch, errorProcessor?: ErrorProcessor) {
        if (errorProcessor !== undefined)
            this.errorProcessor = errorProcessor;
    }
    
    protected dispatch(action: AnyAction) {
        this._dispatch.dispatch(action)
    }

    protected log(message: Error | string) {
        if (process.env.REACT_APP_NODE_ENV === "test")
            console.log(message);
    }

    public displayErrorResponse(error: Error): void {
        this.log(error);
        const { message, actionType } = this.errorProcessor.process(error);

        this.dispatch({
            type: actionType,
            payload: {
                errorMessage: message
            }
        })
    }
}