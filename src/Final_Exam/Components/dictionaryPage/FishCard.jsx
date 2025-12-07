import React, {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Card = styled.article`
    display: flex;
    flex-direction: column;
    width: 140px;
    height: 170px;
    margin: 20px 10px;
    border: 1px solid rgb(187, 187, 187);
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.1);
    }
    
    &.match {
        @media (max-width: 600px) {
            width: 110px;
            height: 140px;
        }
        
        @media (max-width: 500px) {
            width: 100px;
            height: 120px;
        }
    }
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
    
    &.match {
        @media (max-width: 500px) {
            font-size: 0.8rem;
        }
    }
`;

const StarBox = styled.div`
    width: 25px;
    height: 25px;
    background-color: #009DFF;
    margin: 5px;
    border-radius: 4px;
    background-image: url("/imgs/aquamate/${props => props.star}.png");
    background-position: center;
    background-size: 95%;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export default function FishCard({fish, className}) {
    const navigate = useNavigate();

    const [star, setStar] = useState(false);

    return (
        <Card className={className} onClick={() => navigate("/fishInfo", {state: fish})}>
            <Head>
                <Label className={className}>{fish.name}</Label>
                <StarBox
                    star={star ? "star_yellow" : "star"}
                    onClick={e => {
                        e.stopPropagation();
                        setStar(!star)
                    }}
                />
            </Head>
            <Img src={`/imgs/aquamate/${fish.img}`} alt={fish.name}/>
        </Card>
    )
}