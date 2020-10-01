import * as actionTypes from "../../actionTypes";
import { newInvokeMethod } from "../../reducers/hubMethodsReducer";
export const addInvokeMethod = () => {
    return (dispatch, getState) => {
        let invokeMethods = getState().hubMethodsReducer.invokeMethods;
        let newMethod = newInvokeMethod();
        dispatch({
            type: actionTypes.ADD_INVOKE_METHOD,
            payload: {
                invokeMethods: [...invokeMethods, newMethod],
                selectedMethod: newMethod
            }
        });
    };
};

export const deleteInvokeMethod = (id) => {
    return (dispatch, getState) => {
        let selectedMethod = getState().hubMethodsReducer.selectedMethod;
        let invokeMethods = getState().hubMethodsReducer.invokeMethods;
        let newSelectedMethod = selectedMethod;
        if(selectedMethod.id === id){
            let index = invokeMethods.findIndex(method => method.id === id);
            if(index === invokeMethods.length - 1){
                if(index === 0)
                    newSelectedMethod = undefined;
                else newSelectedMethod = invokeMethods[index - 1];
            }
            else newSelectedMethod = invokeMethods[index + 1];
        }
        let newInvokeMethods = invokeMethods.filter(method => method.id !== id);
        dispatch({
            type: actionTypes.DELETE_INVOKE_METHOD,
            payload: {
                selectedMethod: newSelectedMethod,
                invokeMethods: newInvokeMethods
            }
        });

    };
};

export const selectMethod = (id) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SELECT_METHOD,
            payload: id
        });
    };
};

export const changeSelectedMethodName = value => {
    return (dispatch, getState) => {
        let selectedMethod = getState().hubMethodsReducer.selectedMethod;
        let invokeMethods = getState().hubMethodsReducer.invokeMethods;
        selectedMethod.name = value;
        let newInvokeMethods = invokeMethods.map(method => {
            if(method.id === selectedMethod.id)
                method.name = value;
            return method;
        });
        dispatch({
            type: actionTypes.CHANGE_SELECTED_METHOD_NAME,
            payload: {
                selectedMethod: selectedMethod,
                invokeMethods: newInvokeMethods
            }
        })
    }
}

export const addArgumentToMethod = id => {
    console.log("add argument" + id)
    return dispatch => {
        dispatch({
            type: actionTypes.ADD_ARG_TO_INVOKE_METHOD,
            payload: id
        });
    };
}

export const deleteArgumentFromMethod = (methodId, argId) => {
    return (dispatch, getState) => {
        let method = getState().hubMethodsReducer.invokeMethods.find(method => method.id === methodId);
        if(method && method.arguments.length === 1)
            return;
        console.log('methodId', methodId)
        console.log('argId', argId)
        console.log('method', method)
        dispatch({
            type: actionTypes.DELETE_ARG_FROM_INVOKE_METHOD,
            payload: {
                methodId: methodId,
                argId: argId
            }
        });
    };
}

export const changeArgumentValue = (methodId, argId, value) => {
    return (dispatch) => {
        console.log('changeArgValue')
        dispatch({
            type: actionTypes.CHANGE_ARGUMENT_VALUE,
            payload: {
                methodId: methodId,
                argId: argId,
                value: value
            }
        })
    }
}