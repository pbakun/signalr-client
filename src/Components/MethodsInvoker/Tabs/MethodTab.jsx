import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from "@fluentui/react";
import StyledTab from "../../../Containers/Navigation/StyledTab";

const maxStringLength = 12;

const MethodTab = ({id, name, onDelete, onTabChange}) => {

    const displayName = name && name.substring(0, maxStringLength);

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete && onDelete(id);
    }

    return (
        <StyledTab
            style={{paddingLeft: 10}}
            onClick={() => onTabChange(id)}
        >
            {displayName}{displayName && displayName.length === maxStringLength && "..."}
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
