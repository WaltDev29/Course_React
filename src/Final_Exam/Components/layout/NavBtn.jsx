import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
    text-align: center;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 500px) {
        margin: 0;
    }
`;

const Button = styled.button`
    width: 50px;
    height: 50px;
    border: 2px solid white;
    border-radius: 12px;
    background: linear-gradient(135deg, rgb(0, 187, 255) 0%, rgb(0, 187, 255) 50%, rgb(1, 73, 255) 100%);
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.1);
    }

    &.userHome {
        margin: 0 15px;
        width: 90px;
        height: 90px;
        border: 3px solid white;

        @media (max-width: 500px) {
            margin: 0 10px;
            width: 70px;
            height: 70px;
        }
    }
    
    @media (max-width: 500px) {
        margin: 0 10px;
        width: 60px;
        height: 60px;
    }
`;

const Img = styled.img`
    width: 100%;
`;

const Label = styled.h3`
    margin-top: 5px;
    font-size: 1rem;
    color: white;
    
    &.userHome {
        font-size: 1.3rem;
        
        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }
    
    @media (max-width: 500px) {
        margin-top: 0;
        font-size: 0.9rem;
    }
`;

export default function NavBtn(props) {
    return (
        <Wrapper onClick={props.handleNavClick}>
            <Button className={props.className}>
                <Img src={props.imgSrc}/>
            </Button>
            {props.title && <Label className={props.className}>
                {props.title}
            </Label>}
        </Wrapper>
    )
}