import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Header from '../Components/Header';
import ServerConnection from './../Components/ServerConnection';

const StyledApp = styled.div`
    width: 700px;
    height: 500px;
`;

const AppContainer = props => {
    return (
        <StyledApp>
            <Header />
            <ServerConnection />
        </StyledApp>
    )
}

AppContainer.propTypes = {

}

export default AppContainer
