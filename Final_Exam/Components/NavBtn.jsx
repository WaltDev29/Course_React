import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
    text-align: center;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
`;

const Button = styled.button`
    width: 50px;
    height: 50px;
    border: 2px solid white;
    border-radius: 12px;
    background: linear-gradient(135deg, rgb(0, 187, 255) 0%, rgb(0, 187, 255) 50%, rgb(1, 73, 255) 100%);
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
`;

const Label = styled.h3`
    margin-top: 5px;
    font-size: 1rem;
    color: white;
`;

export default function NavBtn(props) {
    return (
        <Wrapper onClick={props.handleNavClick}>
            <Button>
                <Img src={props.imgSrc}/>
            </Button>
            {props.title && <Label>{props.title}</Label>}
        </Wrapper>
    )
}