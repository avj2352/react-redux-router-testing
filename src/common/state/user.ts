import { IDisplayUser } from "../aysnc/AsynCalls";

export enum USER_ACTION_TYPE {    
    USER_PROFILE_UPDATE = 'user/profile-update'
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

export function userReducer(state = getInitialUserSetting(), action: {type: USER_ACTION_TYPE, payload: any}) {
    switch (action.type) {
        case USER_ACTION_TYPE.USER_PROFILE_UPDATE:
            return {...state, ...action.payload};            
        default:
            return state;
    }
}