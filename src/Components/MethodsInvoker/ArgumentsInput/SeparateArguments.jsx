import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { CommandBarButton, } from "@fluentui/react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addArgumentToMethod, deleteArgumentFromMethod, changeArgumentValue } from "../../../Store/actions/hubMethods/actions";
import * as InvokeMethodType from "../../../dataTypes/InvokeMethods";
import SingleArgumentInput from '../../../shared/SingleArgumentInput';

const ArgumentsDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`;

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
    commandButton: {
        root: {
            minHeight: 32,
            left: "-10px"
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

const SeparateArguments = ({ id, args, ...props }) => {

    const printArguments = (data) => {
        console.log('data :>> ', data);
        return data.map((arg, index) => (
            <SingleArgumentInput
                key={index}
                label={`Argument ${index + 1}`}
                value={arg.value}
                onDelete={() => props.deleteArgumentFromMethod(id, arg.id)}
                onChange={(value) => props.changeArgumentValue(id, arg.id, value)}
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
                iconProps={{ iconName: "Add" }}
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

const mapDispatchToProps = dispatch => bindActionCreators({ addArgumentToMethod, deleteArgumentFromMethod, changeArgumentValue }, dispatch);

export default connect(null, mapDispatchToProps)(SeparateArguments)
