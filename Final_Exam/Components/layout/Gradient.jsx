import React from "react";
import styled from "styled-components";

const GradientTop = styled.div`
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.75) 75%, rgba(255, 255, 255, 1) 100%);
    width: 100%;
    height: 100px;
`;

const GradientBottom = styled.div`
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.75) 75%, rgba(255, 255, 255, 1) 100%);
    width: 100%;
    height: 50px;
`;

export default function Gradient(props) {
    return (
        <>
            <GradientTop/>
            {props.children}
            <GradientBottom/>
        </>
    )
}