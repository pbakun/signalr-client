import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Header from '../Components/Header';
import ServerConnection from './../Components/ServerConnection';
import MethodsInvoker from './../Components/MethodsInvoker/MethodsInvoker';

const StyledApp = styled.div`
    width: 700px;
    height: 500px;
`;

const AppContainer = props => {
    return (
        <StyledApp>
            <Header />
            <ServerConnection />
            <MethodsInvoker />
        </StyledApp>
    )
}

AppContainer.propTypes = {

}

export default AppContainer
