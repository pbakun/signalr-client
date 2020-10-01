import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Tabs from './Tabs/Tabs'
import InvokeTab from './Tabs/InvokeTab';
import * as InvokeMethodType from "../../DataTypes/InvokeMethods";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { changeSelectedMethodName } from "../../Store/actions/hubMethods/actions";
import { invokeSelectedMethod } from "../../Store/actions/hub/hubActions";
import usePrevious from './../../Hooks/usePrevious';

const MethodsInvoker = ({ selectedMethod, invokeMethods, ...props }) => {

    useEffect(() => {
        console.log('selectedMethod effect :>> ', selectedMethod);
    }, [selectedMethod]);

    return (
        <div>
            <Tabs />
            {selectedMethod &&
            <InvokeTab
                invokeMethod={selectedMethod}
                onNameChange={(value) => props.changeSelectedMethodName(value)}
                onInvoke={() => props.invokeSelectedMethod()}
            />}
        </div>
    )
}

const mapStateToProps = state => ({
    selectedMethod: state.hubMethodsReducer.selectedMethod,
    invokeMethods: state.hubMethodsReducer.invokeMethods
});

const mapDispatchToProps = dispatch => bindActionCreators({changeSelectedMethodName, invokeSelectedMethod}, dispatch);

MethodsInvoker.propTypes = {
    //redux
    invokeMethods: PropTypes.arrayOf(InvokeMethodType.method),
    changeSelectedMethodName: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodsInvoker)
