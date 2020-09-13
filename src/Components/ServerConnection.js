import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { PrimaryButton, TextField } from "@fluentui/react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connectToHub, changeHubUrl, disconnectHub } from '../Store/actions/hub/hubActions';
import HubConnection from '../Constants/HubConnection';
import { isConnected } from './../Store/actions/hub/hubHelpers';

const Container = styled.div`
    margin: 15px 45px;
    padding: 5px;
`;

const FlexDiv = styled.div`
    display: flex;
    align-items: flex-end;
    width: 80%;
    justify-content: space-between;
`;

const styles = {
    textFieldStyles: {
        fieldGroup: {
            width: 300
        }
    }
};

const translateHubConnectionState = (state) => {
    switch(state){
        case HubConnection.CONNECTED:
            return "Disconnect";
        case HubConnection.CONNECTING:
            return "Connecting...";
        default:
            return "Connect";
    }
}

const ServerConnection = props => {
    const { hubUrl, hubConnection } = props;

    const handleConnectClick = () => {
        if(!isConnected(hubConnection))
            props.connectToHub();
        else props.disconnectHub();
    }

    const handleUrlChange = e => {
        props.changeHubUrl(e.target.value);
    }

    return (
        <Container>
            <FlexDiv>
                <TextField
                    styles={styles.textFieldStyles}
                    label="Hub URL"
                    placeholder="https://localhost:5001/hub"
                    value={hubUrl}
                    onChange={handleUrlChange}
                />
                <PrimaryButton
                    primary
                    onClick={handleConnectClick}
                >
                    {translateHubConnectionState(hubConnection)}
                </PrimaryButton>
            </FlexDiv>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    hubUrl: state.hubReducer.url,
    hubConnection: state.hubReducer.isConnected
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({connectToHub, changeHubUrl, disconnectHub}, dispatch);
};


ServerConnection.propTypes = {
    //redux
    hubUrl: PropTypes.string,
    hubConnected: PropTypes.number,
    connectToHub: PropTypes.func,
    changeHubUrl: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerConnection);
