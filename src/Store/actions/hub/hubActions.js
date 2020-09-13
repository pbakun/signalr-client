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

export const addInvokeMethod = () => {
    return dispatch => {
        dispatch({
            type: type.ADD_INVOKE_METHOD
        });
    };
};

export const deleteInvokeMethod = (id) => {
    return dispatch => {
        dispatch({
            type: type.DELETE_INVOKE_METHOD,
            payload: id
        });
    };
}

export const addArgumentToMethod = id => {
    console.log("add argument" + id)
    return dispatch => {
        dispatch({
            type: type.ADD_ARG_TO_INVOKE_METHOD,
            payload: id
        });
    };
}