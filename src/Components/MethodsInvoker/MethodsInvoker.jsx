import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Tabs from './Tabs/Tabs'
import InvokeTab from './Tabs/InvokeTab';
import * as InvokeMethodType from "../../DataTypes/InvokeMethods";
import { connect } from 'react-redux';

const MethodsInvoker = ({invokeMethods}) => {
    const [tab, setTab] = useState(invokeMethods[0]);

    return (
        <div>
            <Tabs onTabChange={(id) => setTab(id)} />
            {/* <InvokeTab
                // invokeMethod={invokeMethods.find(method => method.id === tab)}
            /> */}
        </div>
    )
}

const mapStateToProps = state => ({
    invokeMethods: state.hubReducer.invokeMethods
})

MethodsInvoker.propTypes = {
    invokeMethods: PropTypes.arrayOf(InvokeMethodType.method)
}

export default connect(mapStateToProps)(MethodsInvoker)
