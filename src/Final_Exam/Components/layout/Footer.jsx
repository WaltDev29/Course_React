import React from "react";
import styled from "styled-components";

import NavLabel from "./NavLabel";

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 20px;
    color: white;
    border-top: 1px solid white;
    
    @media (max-width: 730px) {
        flex-direction: column;
    }
    
    @media (max-width: 500px) {
        font-size: 15px;
    }
`;

const Label = styled.span`
    font-size: 1.2rem;
    
    @media (max-width: 500px) {
    font-size: 15px;
}
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    margin: 20px auto;
    
    @media (max-width: 730px) {
        margin: 10px auto;
    }
`;

export default function Footer() {
    return (
        <Wrapper>
            <Nav>
                <Label>Contact</Label>
                <NavLabel
                    href="https://github.com/WaltDev29"
                    imgSrc="/imgs/aquamate/github.png"
                    label="WaltDev29"
                />
                <NavLabel
                    href=""
                    imgSrc="/imgs/aquamate/email.png"
                    label="waltdev29@gmail.com"
                />
            </Nav>
            <Nav>
                <Label>Source</Label>
                <NavLabel
                    href="https://ko.wikipedia.org/wiki/"
                    imgSrc=""
                    label="Wikipedia"
                />
            </Nav>
        </Wrapper>
    )
}