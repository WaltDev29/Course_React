import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 5px gray;
`;

export default function Card(props) {
    const {title, backgroundColor, children} = props;

    return (
        <Container style={{backgroundColor: backgroundColor}}>
            <h1>{title}</h1>
            {children}
        </Container>
    )
}