import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { TextField, PrimaryButton, CommandBarButton, Icon, IIconProps } from "@fluentui/react";
import SeparateArguments from '../ArgumentsInput/SeparateArguments';

const Container = styled.div`
    margin: 20px;
    padding: 10px;
    box-shadow: 10px;
`;

const MethodDiv = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
`;


const ContentDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const styles = {
    textfield: {
        fieldGroup: {
            width: 300,
            margin: 10
        }
    },
    button: {
        root: {
            margin: 10
        }
    },
    commandButton: {
        root: {
            minHeight: 32
        }
    }
}

const InvokeTab = props => {
    return (
        <Container>
            <MethodDiv>
                <TextField styles={styles.textfield} />
                <PrimaryButton primary styles={styles.button}>
                    Invoke
                </PrimaryButton>
            </MethodDiv>
            <SeparateArguments />
            <ContentDiv>

        <TextField label="With auto adjusting height" multiline autoAdjustHeight />
            </ContentDiv>

        </Container>
    )
}

InvokeTab.propTypes = {

}

export default InvokeTab
