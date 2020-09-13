import HubConnection from "../../Constants/HubConnection";
import * as actionTypes from "../actionTypes";
import guid from './../../Utility/guid';

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
        case actionTypes.ADD_INVOKE_METHOD: {
            return {
                ...state,
                invokeMethods: [...state.invokeMethods, newInvokeMethod()]
            }
        }
        case actionTypes.ADD_ARG_TO_INVOKE_METHOD: {
            return {
                ...state,
                invokeMethods: state.invokeMethods.map(method => {
                    if(method.id === payload)
                        method.arguments = [...method.arguments, newInvokeMethodArgument()];
                    return method;
                })
            }
        }
        case actionTypes.DELETE_INVOKE_METHOD: {
            return {
                ...state,
                invokeMethods: state.invokeMethods.filter(method => method.id !== payload)
            }
        }
        default:
            return state
        }
}
