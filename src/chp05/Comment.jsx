import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 8px;
    padding: 8px;
    display: flex;
    border: 1px solid gray;
    border-radius: 16px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

const Container = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Name = styled.span`
    font-size: 16px;
    font-weight: bold;
`;

const Content = styled.span`
    font-size: 16px;
`;

function Comment(props) {
    return (
        <Wrapper>
            <Image src={props.image}/>
            <Container>
                <Name>{props.name}</Name>
                <Content>{props.text}</Content>
            </Container>
        </Wrapper>
    )
}

export default Comment;