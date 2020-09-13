import React from 'react';
import PropTypes from 'prop-types';
import { Pivot, PivotItem} from "@fluentui/react";
import InvokeTab from './InvokeTab';

const tabs = [
    {
        header: "GetSomethingFromHub",
    },
    {
        header: "GetSomethingElseFromHub"
    }
]

const Tabs = props => {

    const printTabs = (data) => {
        return data.map((tab, index) => (
            <PivotItem
                key={index}
                headerText={tab.header}
            >
                <InvokeTab />
            </PivotItem>
        ))
    }

    return (
        <Pivot>
            {printTabs(tabs)}
        </Pivot>
    )
}

Tabs.propTypes = {

}

export default Tabs;
