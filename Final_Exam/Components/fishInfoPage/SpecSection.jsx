import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-left: 50px;
`;

const Label = styled.div`
    margin-bottom: 0;
    color: rgb(0, 50, 116);
`;

export default function SpecSection({env, type, taming}) {
    return (
        <Container>
            <Label>사육 정보</Label>
            <ul>
                {env && Object.values(env).map(item => <li>{item}</li>)}
            </ul>
            <Label>품종</Label>
            <p>{type}</p>
            <Label>사육</Label>
            <p>{taming}</p>
        </Container>
    )
}