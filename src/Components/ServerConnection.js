import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
    margin: 15px 45px;
    padding: 5px;
`;

const UrlInput = styled.input`
    width: 300px;
    border-radius: 2px;
    border: none;
    font-size: 0.9rem;
    padding: 2px;
`;

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
`;

const ConnectBtn = styled.button`
    border-radius: 4px;
    min-width: 50px;
    padding: 3px;
    margin: 3px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
`;

const ServerConnection = props => {
    return (
        <Container>
            <p>Hub url:</p>
            <FlexDiv>
                <UrlInput placeholder="https://localhost:5001/hub"/>
                <ConnectBtn>Connect</ConnectBtn>
            </FlexDiv>
        </Container>
    )
}

ServerConnection.propTypes = {

}

export default ServerConnection
