import React, {useEffect, useState} from "react";
import styled from "styled-components";

import AsideCard from "./AsideCard";

const Container = styled.aside`
    height: 100%;
    border: 1px solid rgba(207, 207, 207, 0.664);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 10%, rgba(243, 250, 255, 1) 20%, rgba(190, 226, 255, 1) 59%, rgba(134, 215, 255, 1) 100%);
`;

const SearchContainer = styled.div`
    border-bottom: 1px solid rgba(164, 219, 255, 0.568);
    padding-bottom: 15px;
    
    @media (max-width: 730px) {
        margin: 0 50px;
    }
    
    @media (max-width: 600px) {
        margin: 0 0;
    }
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    height: 600px;
    overflow-y: auto;

    @media (max-width: 900px) {
        margin-top: 0;
        height: 600px;
        overflow-y: auto;
    }
    
    @media (max-width: 500px) {
        width: 100%;
    }
`;

const Group = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    margin-top: 15px;
    
    @media (max-width: 900px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Button = styled.button`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 7px;
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, rgb(0, 187, 255) 0%, rgb(0, 187, 255) 50%, rgb(1, 73, 255) 100%);
    cursor: pointer;
    
    @media (max-width: 500px) {
        font-size: 15px;
    }
`;

const Input = styled.input`
    margin-right: 20px;
    width: 200px;
    height: 40px;
    border: 3px solid rgb(81, 185, 255);
    background-color: white;
    border-radius: 8px;
    font-size: 1.2rem;
    
    @media (max-width: 730px) {
        font-size: 0.9rem;
    }
`;

const Select = styled.select`
    margin-right: 20px;
    width: 200px;
    height: 40px;
    border: 3px solid rgb(81, 185, 255);
    background-color: white;
    border-radius: 8px;
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;
`;

const Img = styled.img`
    width: 20px;
    margin-left: 5px;
`;

export default function Aside({pushFish}) {
    const [data, setData] = useState(null);
    const [fishList, setFishList] = useState([]);

    const [text, setText] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("/data/data_fish.json");
                const json = await res.json();
                setData(Object.values(json))
                setFishList(Object.values(json))
            } catch (err) {
                console.error(err);
                alert("물고기 정보 불러오기 실패");
            }
        }

        loadData();
    }, []);

    const handleSearch = (target) => {
        if (!data) return;

        setFishList(data.filter(item =>
            item.name.includes(target)
        ));
    };

    const handleKeyDown = e => {
        if (e.key === "Enter") handleSearch(text)
    }

    return (
        <Container>
            <SearchContainer>
                <Group>
                    <Input type="text"
                           onChange={e => setText(e.target.value)}
                           onKeyDown={e => handleKeyDown(e)}
                    />
                    <Button onClick={() => handleSearch(text)}>Search</Button>
                </Group>
                <Group>
                    <Select>
                        <option value="ocean">바다</option>
                        <option value="freshWater">민물</option>
                        <option value="waterTemp">수온</option>
                        <option value="size">크기</option>
                        <option value="personality">성격</option>
                    </Select>
                    <Button>
                        Filter
                        <Img src="/imgs/aquamate/filter.png"/>
                    </Button>
                </Group>
            </SearchContainer>
            <ItemContainer>
                {fishList.length === 0 ? (
                    <h2>물고기 정보를 찾을 수 없습니다!</h2>
                ) : (
                    fishList.map((fish) => (
                        <AsideCard
                            key={fish.num}
                            fish={fish}
                            pushFish={pushFish}
                        />
                    ))
                )}
            </ItemContainer>
        </Container>
    )
}