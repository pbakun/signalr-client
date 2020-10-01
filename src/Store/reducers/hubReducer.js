import HubConnection from "../../constants/HubConnection";
import * as actionTypes from "../actionTypes";
import guid from '../../utility/guid';

const newInvokeMethodArgument = () => ({
    id: guid(),
    name: "",
    value: ""
});

const newInvokeMethod = () => ({
    id: guid(),
    name: "Invoke Method",
    arguments: [newInvokeMethodArgument()]
})

const initialState = {
    url: "http://localhost:52744/realTimeStatisticsHub",
    isConnected: HubConnection.DISCONNECTED,
    invokeMethods: [newInvokeMethod()]
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
