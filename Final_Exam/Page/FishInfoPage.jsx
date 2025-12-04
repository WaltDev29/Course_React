import React, {useEffect} from "react";
import Layout from "../Components/layout/Layout";
import Gradient from "../Components/layout/Gradient";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";

const Container = styled.section`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    flex-wrap: wrap;
`;

const MainSection = styled.div`
    display: flex;
    border-bottom: 1px solid #3b5388;
`;

const Img = styled.img`
    float: left;
    margin: 50px;
    width: 400px;
    height: 400px;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 10px;
`;

const MainInfo = styled.div`
    margin-left: 50px;
`;

const Name = styled.h1`
    margin-top: 50px;
    font-size: 2rem;
    margin-bottom: 0;
`;

const InfoLabel = styled.h3`
    margin-bottom: 0;
    color: rgb(0, 50, 116);
`;

const InfoLists = styled.ul`
    margin: 5px;
    padding-left: 30px;
`;

const SpecSection = styled.div`
    margin-left: 50px;
`;

export default function FishInfoPage() {
    const location = useLocation();
    const navigate = useNavigate();

    // todo 바로 URL로 접속 시 처리하기
    const fish = location?.state || null;

    useEffect(() => {
        if (fish == null) navigate("/dictionary");
    }, [fish, navigate])

    return (
        <Layout title="Dictionary">
            <Gradient>
                <Container>
                    <Wrapper>
                        <MainSection>
                            <Img src={`/imgs/aquamate/${fish.img}`}/>
                            <MainInfo>
                                <Name>{fish.name}</Name>
                                <InfoLabel>기본 정보</InfoLabel>
                                <InfoLists>
                                    {fish.basic && Object.values(fish.basic).map(info => {
                                        return <li>{info}</li>
                                    })}
                                </InfoLists>
                            </MainInfo>
                        </MainSection>
                        <SpecSection></SpecSection>
                    </Wrapper>
                </Container>
            </Gradient>
        </Layout>
    )
}