import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const BackColor = styled.div`
    background: linear-gradient(135deg, rgb(6, 255, 197) 0%, rgb(0, 170, 255) 48%, rgb(0, 72, 255) 100%);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.3);
    background-repeat: no-repeat;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const mainNavImgSrcs = {
    Dictionary : "book",
    Match : "bookmark",
    About : "heart",
}

export default function Layout(props) {
    const mainNavImgSrc = mainNavImgSrcs[props.title];

    // todo footer 하단 고정
    return (
        <BackColor>
            <Container>
                <Header title={props.title} mainImgSrc={mainNavImgSrc}/>
                <Main>
                    {props.children}
                </Main>
                <Footer/>
            </Container>
        </BackColor>
);
}
