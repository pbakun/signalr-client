import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { TextField, PrimaryButton, CommandBarButton, Icon, IIconProps } from "@fluentui/react";

const ArgumentsDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`;

const styles = {
    textfield: {
        root: {
            width: 120,
            marginLeft: 5
        }
    },
    commandButton: {
        root: {
            minHeight: 32
        }
    },
    iconDeleteArg: {
        root: {
            cursor: "pointer"
        }
    }
}

const data = [
    {
        value: "GetSomething"
    },
    {
        value: "Dupa"
    }
]

const emptyArg = {
    value: ""
}

const SeparateArguments = props => {
    const [args, setArgs] = useState(data);

    const printArguments = (data) => {
        return data.map((arg, index) => (
            <TextField
                key={index}
                styles={styles.textfield}
                label={`Argument ${index+1}`}
                value={arg.value}
                iconProps={{
                    iconName: "Cancel",
                    styles: styles.iconDeleteArg,
                    onClick: () => console.log('dupa')
                }}
            />
        ));
    }

    const handleNewArgClick = () => {
        setArgs(prevState => [...prevState, emptyArg]);
    }

    return (
        <ArgumentsDiv>
            {printArguments(args)}
            <CommandBarButton
                iconProps={{iconName: "Add"}}
                text="New Arg"
                styles={styles.commandButton}
                onClick={handleNewArgClick}
            />
        </ArgumentsDiv>
    )
}

SeparateArguments.propTypes = {

}

export default SeparateArguments
