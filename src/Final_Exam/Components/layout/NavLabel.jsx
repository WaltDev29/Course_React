import React from "react";
import styled from "styled-components";

const Container = styled.a`
    display: inline-flex;
    align-items: center;
    background-color: rgba(255, 249, 249, 0.4);
    border-radius: 8px;
    padding: 5px;
    margin: 0 20px;
    transition: all 0.5s;
    color: white;
    text-decoration: none;
    
    @media (max-width: 730px) {
        margin: 0 5px;
    }
    
    @media (max-width: 500px) {
        font-size: 12px;
        margin-top: 5px;
    }
`;

const Img = styled.img`
    width: 25px;
    margin-right: 10px;
    
    @media (max-width: 500px) {
        width: 20px;
    }
`;

export default function NavLabel(props) {
    return (
        <Container href={props.href} style={{pointerEvents: props.href ? "auto" : "none"}}>
            {props.imgSrc && <Img src={props.imgSrc}/>}
            <span>{props.label}</span>
        </Container>
    )
}