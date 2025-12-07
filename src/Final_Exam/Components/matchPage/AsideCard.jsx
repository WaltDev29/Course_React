import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Card = styled.article`
    display: flex;
    align-items: center;
    width: 100%;
    height: 90px;
    border: 1px solid rgb(199, 235, 255);
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    background-color: white;
    transition: all 0.3s;
    
    &:hover {
        opacity: 0.7;
        color: gray;
    }
`;

const Img = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 5px;
    border: 1px solid rgb(192, 192, 192);
`;

const Info = styled.div`
    margin: 0 10px;
`;

const Name = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
`;

const StarContainer = styled.div`
    flex-grow: 1;
    height: 100%;
`;

const StarBox = styled.div`
    float: right;
    width: 25px;
    height: 25px;
    background-color: #009DFF;
    margin: 5px;
    border-radius: 4px;
    border: 1px solid rgb(190, 190, 190);
    background-image: url("/imgs/aquamate/${props => props.star}.png");
    background-position: center;
    background-size: 95%;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export default function AsideCard({fish, pushFish}) {
    const navigate = useNavigate();

    const [star, setStar] = useState(false);

    return (
        <Card onClick={() => pushFish(fish)}>
            <Img src={`/imgs/aquamate/${fish.img}`}/>
            <Info>
                <Name onClick={() => navigate("/fishInfo", {state: fish})}>{fish.name}</Name>
                <p>바다 20~25C</p>
            </Info>
            <StarContainer>
                <StarBox
                    star={star ? "star_yellow" : "star"}
                    onClick={e => {
                        e.stopPropagation();
                        setStar(!star)
                    }}
                />
            </StarContainer>
        </Card>
    )
}