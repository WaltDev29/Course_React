import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    border-bottom: 1px solid #3b5388;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
        width: 100%;
        margin-bottom: 10px;
    }
`;

const Img = styled.img`
    float: left;
    margin: 50px;
    width: 400px;
    height: 400px;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 10px;
    
    @media (max-width: 1000px) {
        float: unset;
        margin: 20px;
        margin-top: 80px;
        width: 50%;
        height: auto;
    }
    
    @media (max-width: 730px) {
        margin-top: 10px;
    }
`;

const MainInfo = styled.div`
    margin-left: 50px;
    
    @media (max-width: 1000px) {
        width: 100%;
    }
    
    @media (max-width: 730px) {
        margin-left: 0;
    }
`;

const Name = styled.h1`
    margin-top: 50px;
    font-size: 2rem;
    margin-bottom: 0;
    
    @media (max-width: 1000px) {
        margin-top: 10px;
    }
`;

const InfoLabel = styled.h3`
    margin-bottom: 0;
    color: rgb(0, 50, 116);
`;

const InfoLists = styled.ul`
    margin: 5px;
    padding-left: 30px;
`;

export default function MainSection({name, img, desc}) {
    return (
        <Container>
            <Img src={`/imgs/aquamate/${img}`}/>
            <MainInfo>
                <Name>{name}</Name>
                <InfoLabel>기본 정보</InfoLabel>
                <InfoLists>
                    {desc && Object.values(desc).map(info => {
                        return <li>{info}</li>
                    })}
                </InfoLists>
            </MainInfo>
        </Container>
    )
}