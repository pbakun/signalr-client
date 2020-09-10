import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledHeader = styled.div`
    height: 30px;
    margin: 5px;
    padding-left: 25px;
`;
const Header = props => {
    return (
        <StyledHeader>
            <h2>SignalR devtool</h2>
        </StyledHeader>
    )
}

Header.propTypes = {

}

export default Header
