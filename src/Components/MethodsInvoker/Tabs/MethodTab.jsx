import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { IconButton } from "@fluentui/react";
import StyledTab from "../../../Containers/Navigation/StyledTab";

const MethodTab = ({id, name, onDelete, onTabChange}) => {

    const handleDelete = () => {
        onDelete && onDelete(id);
    }

    return (
        <StyledTab
            style={{paddingLeft: 10}}
            onClick={() => onTabChange(id)}
        >
            {name}
            <IconButton
                iconProps={{iconName: "Cancel"}}
                onClick={handleDelete}
            />
        </StyledTab>
    )
}

MethodTab.propTypes = {
    onTabChange: PropTypes.func,
    //redux
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    onDelete: PropTypes.func
}

export default MethodTab
