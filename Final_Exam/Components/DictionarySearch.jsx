import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color: white;
    padding: 7px;
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, rgb(0, 187, 255) 0%, rgb(0, 187, 255) 50%, rgb(1, 73, 255) 100%);
    cursor: pointer;
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
`;

export default function DictionarySearch({setText, handleSearch}) {
    return (
        <div>
            {/* todo 필터 아이콘 중앙 정렬 */}
            <Button>
                Filter
                <Img src="/imgs/aquamate/filter.png"/>
            </Button>
            <Input type="text" onChange={e => setText(e.target.value)} />
            <Button onClick={handleSearch}>Search</Button>
        </div>
    )
}