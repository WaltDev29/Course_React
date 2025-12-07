import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import NavBtn from "../Components/layout/NavBtn";
import Layout from "../Components/layout/Layout";

const Logo = styled.img`
    width: 500px;

    @media (max-width: 500px) {
        width: 90%;
    }
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
    )
}