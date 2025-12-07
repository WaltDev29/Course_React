import React, {useState} from "react";
import styled from "styled-components";

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    color: white;
    padding: 7px;
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, rgb(0, 187, 255) 0%, rgb(0, 187, 255) 50%, rgb(1, 73, 255) 100%);
    cursor: pointer;
    
    @media (max-width: 730px) {
        font-size: 15px;
    }
`;

const Img = styled.img`
    width: 20px;
    margin-left: 5px;
`;

const Input = styled.input`
    margin: 30px 40px;
    width: 300px;
    height: 40px;
    border: 3px solid rgb(81, 185, 255);
    background-color: white;
    border-radius: 8px;
    font-size: 1.2rem;
    outline: none;
    
    @media (max-width: 730px) {
        width: 50%;
        margin: 10px;
        height: 30px;
        font-size: 0.9rem;
    }
`;

export default function DictionarySearch({handleSearch}) {
    const [text, setText] = useState("");

    const handleKeyDown = e => {
        if (e.key === "Enter") handleSearch(text)
    }

    return (
        <div>
            <Button>
                Filter
                <Img src="/imgs/aquamate/filter.png"/>
            </Button>
            <Input type="text"
                   onChange={e => setText(e.target.value)}
                   onKeyDown={e => handleKeyDown(e)}
            />
            <Button onClick={() => handleSearch(text)}>Search</Button>
        </div>
    )
}