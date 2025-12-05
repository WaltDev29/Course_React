import React from "react";
import NavBtn from "../Components/layout/NavBtn";
import {useNavigate} from "react-router-dom";
import Layout from "../Components/layout/Layout";
import styled from "styled-components";

const Logo = styled.img`
    width: 500px;
`;

const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export default function UserHomePage() {
    const navigate = useNavigate();

    const handleNavClick = (direction) => {
        navigate(direction);
    }

    return (
        <>
            <Layout title="" home={true}>
                        <Logo src="/imgs/aquamate/logo.png"/>
                        <Nav>
                            <NavBtn
                                className="userHome"
                                handleNavClick={() => handleNavClick("/dictionary")}
                                imgSrc="/imgs/aquamate/book.png"
                                title="Dictionary"
                            />
                            <NavBtn
                                className="userHome"
                                handleNavClick={() => handleNavClick("/match")}
                                imgSrc="/imgs/aquamate/heart.png"
                                title="Match"
                            />
                            <NavBtn
                                className="userHome"
                                handleNavClick={() => handleNavClick("/about")}
                                imgSrc="/imgs/aquamate/bookmark.png"
                                title="About"
                            />
                        </Nav>
            </Layout>
        </>
    )
}