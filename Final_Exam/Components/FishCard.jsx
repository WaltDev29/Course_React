import React from "react";
import styled from "styled-components";

const Card = styled.article`
    display: flex;
    flex-direction: column;
    width: 140px;
    height: 170px;
    margin: 20px 10px;
    border: 1px solid rgb(187, 187, 187);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s;
`;

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

const Label = styled.h3`
    margin: 5px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const StarBox = styled.div`
    width: 25px;
    height: 25px;
    background-color: #009DFF;
    margin: 5px;
    border-radius: 4px;
    background-image: url("/imgs/aquamate/Star.png");
    background-position: center;
    background-size: 95%;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export default function FishCard({name, imgSrc}) {
    return (
        <Card>
            <Head>
                <Label>{name}</Label>
                <StarBox/>
            </Head>
            <Img src={imgSrc} alt={name}/>
        </Card>
    )
}