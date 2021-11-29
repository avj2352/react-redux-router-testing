import { createStore, combineReducers } from "redux";
import { userReducer } from "./user";

export enum ACTION_TYPE {
    APP_GENERAL = 'app/general',    
};

export type IAppState = {
    version: string, 
    appName: string    
};

export const initialState: IAppState = {
    version: `1.0.0`,
    appName: `Mashup`,    
};

export function appReducer(state = initialState, action: {type: ACTION_TYPE, payload: any}) {
    return state;
}

export const store = createStore(combineReducers({
    app: appReducer,
    user: userReducer
}));