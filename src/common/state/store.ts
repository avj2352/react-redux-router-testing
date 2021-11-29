import { createStore } from "redux";
import { IDisplayUser } from "../aysnc/AsynCalls";

export enum ACTION_TYPE {
    USER_PROFILE = 'user-profile'
};

export type IAppState = {
    version: string,
    appName: string,
    user: IDisplayUser
};

function getInitialUserSetting(): IDisplayUser {
    return {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        role: 'free' ,
        subscriptionType: ''
    };
}

export const initialState: IAppState = {
    version: `1.0.0`,
    appName: `Mashup`,
    user: getInitialUserSetting()
};

export function reducer(state = initialState, action: {type: ACTION_TYPE, payload: any}) {
    return state;
}

export const store = createStore(reducer);