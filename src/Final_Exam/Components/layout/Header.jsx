import React from "react";
import NavBtn from "./NavBtn";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.a`
    cursor: pointer;
`;

const LogoImg = styled.img`
    width: 200px;
`;

const CurPageIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: 20px;
`;

const CurPageBtn = styled.button`
    width: 90px;
    height: 90px;
    border: 3px solid white;
    border-radius: 12px;
    background: linear-gradient(135deg, rgb(0, 187, 255) 0%, rgb(0, 187, 255) 50%, rgb(1, 73, 255) 100%);
    cursor: pointer;
    transition: all 0.5s;
    
    &:hover {
        transform: scale(1.1);
    }
`;

const CurPageImg = styled.img`
    width: 100%;
`;

const CurpageLabel = styled.h1`
    margin: 10px;
`;

const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export default function Header({title, mainImgSrc}) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Logo onClick={() => navigate("/")}>
                <LogoImg src="/imgs/aquamate/logo.png"/>
            </Logo>
            <CurPageIcon>
                <CurPageBtn onClick={() => navigate(`/${title}`)}>
                    <CurPageImg src={`/imgs/aquamate/${mainImgSrc}.png`}/>
                </CurPageBtn>
                <CurpageLabel>{title}</CurpageLabel>
            </CurPageIcon>
            <Nav>
                <NavBtn
                    className=""
                    handleNavClick={() => navigate("/dictionary")}
                    imgSrc="/imgs/aquamate/book.png"
                    title="Dictionary"
                />
                <NavBtn
                    className=""
                    handleNavClick={() => navigate("/match")}
                    imgSrc="/imgs/aquamate/heart.png"
                    title="Match"
                />
                <NavBtn
                    className=""
                    handleNavClick={() => navigate("/about")}
                    imgSrc="/imgs/aquamate/bookmark.png"
                    title="About"
                />
            </Nav>
        </Wrapper>
    )
}
