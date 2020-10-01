import * as actionTypes from "../actionTypes";
import guid from './../../Utility/guid';

export const newInvokeMethodArgument = () => ({
    id: guid(),
    name: "",
    value: ""
});

export const newInvokeMethod = () => ({
    id: guid(),
    name: "Invoke Method",
    arguments: [newInvokeMethodArgument()]
})

const initialMethod = newInvokeMethod();

const initialState = {
    selectedMethod: initialMethod,
    invokeMethods: [initialMethod]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.ADD_INVOKE_METHOD: {
            return {
                ...state,
                ...payload
            }
        }
        case actionTypes.SELECT_METHOD: {
            return {
                ...state,
                selectedMethod: state.invokeMethods.find(method => method.id === payload)
            }
        }
        case actionTypes.ADD_ARG_TO_INVOKE_METHOD: {
            return {
                ...state,
                invokeMethods: state.invokeMethods.map(method => {
                    if (method.id === payload)
                        method.arguments = [...method.arguments, newInvokeMethodArgument()];
                    return method;
                })
            }
        }
        case actionTypes.DELETE_ARG_FROM_INVOKE_METHOD: {
            return {
                ...state,
                invokeMethods: state.invokeMethods.map(method => {
                    if(method.id !== payload.method)
                        return method;
                    method.arguments = method.arguments.filter(arg => arg.id !== payload.arg);
                    return method;
                })
            }
        }
        case actionTypes.DELETE_INVOKE_METHOD: {
            return {
                ...state,
                ...payload
            }
        }
        case actionTypes.CHANGE_SELECTED_METHOD_NAME: {
            return {
                ...state,
                ...payload
            }
        }
        default:
            return state
    }
}
