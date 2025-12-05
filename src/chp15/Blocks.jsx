import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #9254bf;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 10px;
    background-color: ${props => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const blockItems = [
    {
        label: "Block 1",
        padding: "1rem",
        backgroundColor: "pink"
    },
    {
        label: "Block 2",
        padding: "2rem",
        backgroundColor: "lightblue"
    },
    {
        label: "Block 3",
        padding: "3rem",
        backgroundColor: "wheat"
    }
]

export default function Blocks() {
    return (
        <Wrapper>
            {blockItems.map(block => {
                return (
                    <Block
                    key={block.label}
                    padding={block.padding}
                    backgroundColor={block.backgroundColor}
                    >
                        {block.label}
                    </Block>)
            })}
        </Wrapper>
    )
}