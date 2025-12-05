import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 8px;
    padding: 8px;
    display: flex;
    border: 1px solid gray;
    border-radius: 16px;
`;

const Message = styled.span`
    color: magenta;
    font-size: 16px;
`;

class Notification extends React.Component {
    constructor(props) {
        super(props)

        this.state = {};
    }

    render() {
        return (
            <Wrapper>
                <Message>{this.props.message}</Message>
            </Wrapper>
        )
    }
}

export default Notification;