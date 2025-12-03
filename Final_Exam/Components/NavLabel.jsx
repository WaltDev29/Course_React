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
`;

const Img = styled.img`
    width: 25px;
    margin-right: 10px;
`;

export default function NavLabel(props) {
    // todo a 태그 기본 스타일 제거 (밑줄)
    return (
        <Container href={props.href} style={{pointerEvents: props.href ? "auto" : "none"}}>
            {props.imgSrc && <Img src={props.imgSrc}/>}
            <span>{props.label}</span>
        </Container>
    )
}