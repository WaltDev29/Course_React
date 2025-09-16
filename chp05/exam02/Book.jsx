import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
    margin: 8px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    border: 1px solid black;
    border-radius: 16px;
    background-color: #d2c8ed;
    aspect-ratio: 4/3;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const BookImg = styled.img`
    width: 100%;
    max-width: 250px;
    height: auto;
    flex-grow: 1;
    border-radius: 8px;
    object-fit: cover;
`;

const BookContent = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
`;

const Author = styled.span`
    color: #555555;
    font-size: 14px;
    font-weight: 4px;
`;

function Book(props) {
    return (
        <Wrap className="wrapper">
            <div>
                <BookImg className="image"
                    src={props.image}
                    alt={props.title}/>
            </div>
            <BookContent className="contentContainer">
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
            </BookContent>
        </Wrap>
    )
}

export default Book;