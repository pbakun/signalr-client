import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Tabs from './Tabs/Tabs'
import InvokeTab from './Tabs/InvokeTab';
import * as InvokeMethodType from "../../DataTypes/InvokeMethods";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { changeSelectedMethodName } from "../../Store/actions/hubMethods/actions";
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
            />}
        </div>
    )
}

const mapStateToProps = state => ({
    selectedMethod: state.hubMethodsReducer.selectedMethod,
    invokeMethods: state.hubMethodsReducer.invokeMethods
});

const mapDispatchToProps = dispatch => bindActionCreators({changeSelectedMethodName}, dispatch);

MethodsInvoker.propTypes = {
    //redux
    invokeMethods: PropTypes.arrayOf(InvokeMethodType.method),
    changeSelectedMethodName: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodsInvoker)
