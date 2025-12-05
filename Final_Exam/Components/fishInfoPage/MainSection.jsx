import React from "react";
import styled from "styled-components";

const Container = styled.div`
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