import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { TextField, CommandBarButton, Icon } from "@fluentui/react";

const InputDiv = styled.div`
    display: flex;
    align-items: flex-end;
`;

const styles = {
    textfield: {
        root: {
            width: 120,
            marginLeft: 5
        }
    },
    iconDeleteArg: {
        root: {
            cursor: "pointer",
            position: "relative",
            left: "-20px",
            bottom: "10px"
        }
    }
}

const SingleArgumentInput = ({ label, value, onDelete, onChange }) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        console.log('value', value)
        setState(value);
    }, [value]);

    return (
        <InputDiv>
            <TextField
                styles={styles.textfield}
                label={label}
                value={state}
                onChange={(e) => setState(e.target.value)}
                onBlur={() => onChange && onChange(state)}
            />
            <Icon
                iconName={"Cancel"}
                styles={styles.iconDeleteArg}
                onClick={onDelete}
            />
        </InputDiv>
    )
}

SingleArgumentInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onDelete: PropTypes.func,
    onChange: PropTypes.func
};

export default SingleArgumentInput;
