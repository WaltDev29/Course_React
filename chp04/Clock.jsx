import React from "react";
import styled from "styled-components"

const DivClock = styled.div `
    border: 20px groove #f481b2;
    background-color: #f4a5c7;
    color: white;
    padding: 20px;
    text-align: center;
`;

function Clock() {
    return (
        <DivClock>
            <h1>Hello World!</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </DivClock>
    );
}

export default Clock;