import React from "react";
import NavBtn from "./NavBtn";
import styled from "styled-components";

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

// todo 버튼 애니메이션 적용
const CurPageIcon = styled.a`
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

// todo 클릭 이벤트 구현
const handleNavClick = (direction) => {
    alert(direction)
}

export default function Header({title, mainImgSrc}) {
    return (
        <Wrapper>
            <Logo>
                <LogoImg src="/imgs/aquamate/logo.png"/>
            </Logo>
            <CurPageIcon>
                <CurPageBtn>
                    <CurPageImg src={`/imgs/aquamate/${mainImgSrc}.png`}/>
                </CurPageBtn>
                <CurpageLabel>{title}</CurpageLabel>
            </CurPageIcon>
            <Nav>
                <NavBtn
                    handleNavClick={() => handleNavClick("dictionary")}
                    imgSrc="/imgs/aquamate/book.png"
                    title="Dictionary"
                />
                <NavBtn
                    handleNavClick={() => handleNavClick("match")}
                    imgSrc="/imgs/aquamate/heart.png"
                    title="Match"
                />
                <NavBtn
                    handleNavClick={() => handleNavClick("about")}
                    imgSrc="/imgs/aquamate/bookmark.png"
                    title="About"
                />
            </Nav>
        </Wrapper>
    )
}