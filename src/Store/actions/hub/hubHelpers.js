import HubConnection from "../../../Constants/HubConnection";

export const isConnected = state => state === HubConnection.CONNECTED ? true : false;