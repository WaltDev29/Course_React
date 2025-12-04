import React from "react";
import NavLabel from "./NavLabel";
import styled from "styled-components";

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 20px;
    color: white;
    border-top: 1px solid white;
`;

const Label = styled.span`
    font-size: 1.2rem
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    margin: 20px auto;
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