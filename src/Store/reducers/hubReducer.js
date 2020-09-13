import HubConnection from "../../Constants/HubConnection";
import * as actionTypes from "../actionTypes";

const initialState = {
    url: "http://localhost:5000/hub",
    isConnected: HubConnection.DISCONNECTED,
    invokeMethods: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.CHANGE_HUB_URL:
            return {
                ...state,
                url: payload
            }
        case actionTypes.SET_CONNECTION_STATUS: {
            return {
                ...state,
                isConnected: payload
            }
        }
        default:
            return state
        }
}
