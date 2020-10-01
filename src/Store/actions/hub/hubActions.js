import * as type from "../../actionTypes";

export const connectToHub = () => {
    return dispatch => dispatch({
        type: type.START_HUB_CONNECTION
    });
};

export const disconnectHub = () => {
    return dispatch => {
        dispatch({
            type: type.STOP_HUB_CONNECTION
        });
    };
};

export const invokeSelectedMethod = () => {
    return dispatch => {
        dispatch({
            type: type.INVOKE_SELECTED_METHOD
        });
    };
};

export const changeHubUrl = value => {
    return dispatch => {
        dispatch({
            type: type.CHANGE_HUB_URL,
            payload: value
        });
    };
};

export const setUpConnectionState = state => {
    console.log("Update connection state" + state)
    return dispatch => {
        dispatch({
            type: type.SET_CONNECTION_STATUS,
            payload: state
        });
    };
};