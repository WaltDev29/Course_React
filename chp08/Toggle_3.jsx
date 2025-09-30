import React from "react";
import styled from "styled-components";

const Button = styled.button`
    font-size: 30px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
`;

class Toggle_3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true};
    }

    handleClick = () => {
        this.setState(preState => ({
            isToggleOn: !preState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "On" : "Off"}
                </Button>
            </div>
        )
    }
}

export default Toggle_3;