import { HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";
import * as actionType from "../actionTypes";
import { setUpConnectionState } from '../actions/hub/hubActions';
import { bindActionCreators } from 'redux';
import HubConnection from "../../Constants/HubConnection";

const isConnected = connection => connection && connection.state === HubConnectionState.Connected;

const buildSignalRConnection = (connection, url) => {
    if(isConnected(connection))
        stopConnection(connection).then(() => console.log("Previous connection stopped"));

    const hub = new HubConnectionBuilder()
                .withUrl(url)
                .build();

    return hub;
}

const startConnection = connection => !isConnected(connection) ? connection.start() : Promise.resolve()

const stopConnection = (connection) => isConnected(connection) ? connection.stop() : Promise.resolve()

const invokeMethod = (connection, methodName, args) => {
    if(!isConnected(connection))
        return;
    connection.invoke(methodName, ...args);
}

export const signalRMiddleware = () => {
    let signalRConnection = null;

    return store => next => action => {
        const updateConnectionState = bindActionCreators(setUpConnectionState, store.dispatch);
        const hubUrl = store.getState().hubReducer.url;

        switch(action.type) {
            case actionType.START_HUB_CONNECTION: {
                console.log(`Hub connection atempt to ${hubUrl}`);
                updateConnectionState(HubConnection.CONNECTING)
                signalRConnection = buildSignalRConnection(signalRConnection, hubUrl);
                startConnection(signalRConnection)
                    .then(() => updateConnectionState(HubConnection.CONNECTED))
                    .catch(() => updateConnectionState(HubConnection.DISCONNECTED))
                break;
            }
            case actionType.STOP_HUB_CONNECTION: {
                console.log("Stopping hub connection");
                stopConnection(signalRConnection).then(() => updateConnectionState(HubConnection.DISCONNECTED));
                break;
            }
            case actionType.INVOKE_SELECTED_METHOD: {
                const method = store.getState().hubMethodsReducer.selectedMethod;
                console.log('Invoking method');
                invokeMethod(signalRConnection, method.name, method.arguments);
            }
            default:
                break;
        }
        return next(action);
    }
}