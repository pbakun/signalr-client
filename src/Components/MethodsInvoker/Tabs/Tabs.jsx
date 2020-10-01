import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { IconButton } from "@fluentui/react";
import * as InvokeMethodsType from "../../../dataTypes/InvokeMethods";
import StyledTab from "../../../Containers/Navigation/StyledTab";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addInvokeMethod, deleteInvokeMethod, selectMethod } from './../../../Store/actions/hubMethods/actions';
import MethodTab from './MethodTab';
import usePrevious from '../../../hooks/usePrevious';

const TabsContainer = styled.div`
    display: flex;
    alignItems: center;
    justify-content: flex-start;
    wrap: flex-wrap;
`;

const Tabs = ({selectedMethod, invokeMethods, onTabChange, ...props}) => {
    const previousState = usePrevious(invokeMethods);

    // useEffect(() => {
    //     if(previousState && previousState.length < invokeMethods.length)
    //         return onTabChange(invokeMethods[invokeMethods.length - 1].id);
    // }, [invokeMethods]);

    const handleTabChange = (id) => {
        props.selectMethod(id);
    }

    const handleAddNewTab = () => {
        props.addInvokeMethod();
    }

    const handleDeleteTab = (id) => {
        props.deleteInvokeMethod(id);
    }

    const printTabs = (data) => {
        return data.map((tab, index) => (
            <MethodTab
                key={index}
                id={tab.id}
                name={tab.name}
                onDelete={handleDeleteTab}
                onTabChange={handleTabChange}
            />
        ))
    }

    return (
        <TabsContainer>
            {printTabs(invokeMethods)}
            <StyledTab>
                <IconButton
                    iconProps={{iconName: "Add"}}
                    onClick={handleAddNewTab}
                />
            </StyledTab>
        </TabsContainer>
    )
}

Tabs.propTypes = {
    onTabChange: PropTypes.func,
    //redux
    selectedMethod: InvokeMethodsType.method,
    invokeMethods: PropTypes.arrayOf(InvokeMethodsType.method),
    addInvokeMethod: PropTypes.func,
    deleteInvokeMethod: PropTypes.func
}

const mapStateToProps = (state) => ({
    selectedMethod: state.hubMethodsReducer.selectedMethod,
    invokeMethods: state.hubMethodsReducer.invokeMethods
});

const mapDispatchToProps = dispatch => bindActionCreators({addInvokeMethod, deleteInvokeMethod, selectMethod}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
