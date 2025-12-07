import React from "react";
import styled from "styled-components";

import Layout from "../Components/layout/Layout";
import Gradient from "../Components/layout/Gradient";

const Container = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    
    @media (max-width: 500px) {
        margin: -10px;
        margin-bottom: -50px;
    }
`;

const NavLabel = styled.a`
    text-align: center;
    flex: 1;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 0 50px;
    margin: 1em;
    transition: all 0.3s;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    
    @media (max-width: 730px) {
        font-size: 1rem;
        padding: 0 10px;
    }
    
    @media (max-width: 500px) {
        margin-top: 0;
        font-size: 0.9rem;
    }

    &.center {
        border-left: 1px solid rgb(0, 183, 255);
        border-right: 1px solid rgb(0, 183, 255);
    }
    
    &:hover {
        color: rgb(0, 77, 221);
    }
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    border-top: 1px solid rgb(0, 97, 136);
    
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
        border-bottom: 1px solid rgb(112, 140, 177);
    }
    
    &:last-child {
        border: none;
    }
`;

const Img = styled.img`
    float: left;
    margin: 50px;
    width: 400px;
    border: 1px solid rgb(207, 207, 207);
    
    @media (max-width: 800px) {
        float: unset;
        margin: 20px;
        margin-top: 80px;
        margin-bottom: 0;
        width: 80%;
    }
`;

const Description = styled.div`
    width: 30%;
    margin-left: 50px;
    
    @media (max-width: 800px) {
        width: 100%;
    }
    
    @media (max-width: 500px) {
        margin-left: 0;
    }
`;

const Label = styled.h1`
    margin-top: 50px;
    font-size: 2rem;
    color: rgb(0, 183, 255);
    margin-bottom: 0;
    
    @media (max-width: 800px) {
        margin-top: 10px;
    }
`;

const SubLabel = styled.p`
    margin-top: 0;
`;

const H2 = styled.h2`
    color: rgb(0, 132, 255);
    margin-bottom: 0;
`;

const Ul = styled.ul`
    margin: 5px;
    padding-left: 30px;
`;

export default function AboutPage() {
    return (
        <Layout title="About" home={false}>
            <Gradient>
                <Container>
                    <Nav>
                        <NavLabel href="#info">Info</NavLabel>
                        <NavLabel href="#dictionary" className="center">Dictionary</NavLabel>
                        <NavLabel href="#match">Match</NavLabel>
                    </Nav>
                    <MainContainer>
                        <Wrapper id="info">
                            <Img src="/imgs/aquamate/logo2.png"/>
                            <Description>
                                <Label>Aqua Mate</Label>
                                <SubLabel>물고기들의 합사 궁합을 확인할 수 있는 사이트입니다.</SubLabel>
                                <p>
                                    <b>"이 물고기랑 합사해도 될까?"</b><br/>
                                    물생활을 시작한 사람이라면 한 번쯤 고민해봤을 질문입니다.<br/>
                                    이 사이트는 그런 고민을 덜어드리기 위해 만들어졌습니다.<br/>
                                    물고기들의 성격, 수질 조건, 크기, 활동 영역 등을 기반으로 합사 가능 여부를 확인할 수 있는 물고기 사전이자 도우미입니다.
                                </p>
                            </Description>
                        </Wrapper>
                        <Wrapper id="dictionary">
                            <Img src="/imgs/aquamate/info_dic.png"/>
                            <Description>
                                <Label>Dictionary</Label>
                                <SubLabel>수백 가지 물고기 정보를 한 눈에 볼 수 있는 디지털 물생활 도감입니다.</SubLabel>
                                <H2>특징</H2>
                                <Ul>
                                    <li>국문/영문 이름과 실제 사진 제공</li>
                                    <li>초보자도 쉽게 이해할 수 있는 간단한 정보 요약</li>
                                    <li>검색 및 필터 기능으로 원하는 어종 빠르게 찾기</li>
                                    <li>합사 추천 어종과 함께 보면 더 좋은 물고기 소개</li>
                                    <li>꾸준히 업데이트되는 물고기 정보</li>
                                    <li>즐겨찾기 기능</li>
                                </Ul>
                            </Description>
                        </Wrapper>
                        <Wrapper id="match">
                            <Img src="/imgs/aquamate/info_match.png"/>
                            <Description>
                                <Label>Match Simulator</Label>
                                <SubLabel>물고기들이 서로 잘 지낼 수 있는지 미리 알아볼 수 있는 기능입니다.</SubLabel>
                                <H2>특징</H2>
                                <Ul>
                                    <li>어종의 성격, 크기, 수질 조건, 활동 영역 등을 바탕으로 판별</li>
                                    <li>3단계 결과 제공</li>
                                    <li>대체 어종 제안</li>
                                    <li>실제 수조 환경 고려</li>
                                    <li>다양한 조합 테스트 가능</li>
                                </Ul>
                            </Description>
                        </Wrapper>
                    </MainContainer>
                </Container>
            </Gradient>
        </Layout>
    )
}