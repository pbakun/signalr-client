import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Pivot, PivotItem, CommandBarButton, IconButton } from "@fluentui/react";
import * as InvokeMethodsType from "../../../DataTypes/InvokeMethods";
import InvokeTab from './InvokeTab';
import StyledTab from "../../../Containers/Navigation/StyledTab";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addInvokeMethod, deleteInvokeMethod } from './../../../Store/actions/hub/hubActions';
import MethodTab from './MethodTab';

const TabsContainer = styled.div`
    display: flex;
    alignItems: center;
    justify-content: flex-start;
    wrap: flex-wrap;
`;

const Tabs = ({invokeMethods, onTabChange, ...props}) => {

    const printTabs = (data) => {
        return data.map((tab, index) => (
            <MethodTab
                key={tab.id}
                id={tab.id}
                name={tab.name}
                onDelete={(id) => props.deleteInvokeMethod(id)}
                onTabChange={onTabChange}
            />
        ))
    }

    return (
        <TabsContainer>
            {printTabs(invokeMethods)}
            <StyledTab>
                <IconButton
                    iconProps={{iconName: "Add"}}
                    onClick={() => props.addInvokeMethod()}
                />
            </StyledTab>
        </TabsContainer>
    )
}

Tabs.propTypes = {
    onTabChange: PropTypes.func,
    //redux
    invokeMethods: PropTypes.arrayOf(InvokeMethodsType.method),
    addInvokeMethod: PropTypes.func,
    deleteInvokeMethod: PropTypes.func
}

const mapStateToProps = (state) => ({
    invokeMethods: state.hubReducer.invokeMethods
});

const mapDispatchToProps = dispatch => bindActionCreators({addInvokeMethod, deleteInvokeMethod}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
