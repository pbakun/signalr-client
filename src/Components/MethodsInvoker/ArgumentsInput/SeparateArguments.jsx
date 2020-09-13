import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { TextField, PrimaryButton, CommandBarButton, Icon, IIconProps } from "@fluentui/react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addArgumentToMethod } from "../../../Store/actions/hub/hubActions";
import * as InvokeMethodType from "../../../DataTypes/InvokeMethods";

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

const SeparateArguments = ({id, args, ...props}) => {

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
        props.addArgumentToMethod(id);
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
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    args: PropTypes.arrayOf(InvokeMethodType.argument),
    addArgumentToMethod: PropTypes.func
}

const mapDispatchToProps = dispatch => bindActionCreators({addArgumentToMethod}, dispatch);

export default connect(null, mapDispatchToProps)(SeparateArguments)
