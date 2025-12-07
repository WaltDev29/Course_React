import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Layout from "../Components/layout/Layout";
import Gradient from "../Components/layout/Gradient";
import DictionarySearch from "../Components/dictionaryPage/DictionarySearch";
import FishCard from "../Components/dictionaryPage/FishCard";

const Container = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const TypeNav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
`;

const Type = styled.h3`
    text-align: center;
    flex: 1;
    font-size: 1.5rem;
    padding: 0 50px;
    cursor: pointer;

    @media (max-width: 730px) {
        font-size: 1.5rem;
        padding: 0 10px;
    }
    
    @media (max-width: 500px) {
        font-size: 1rem;
    }
    
    &.border {
        border-left: 1px solid rgb(0, 183, 255);
        border-right: 1px solid rgb(0, 183, 255);
    }
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    min-height: 350px;
    
    @media (max-width: 500px) {
        width: 100%;
    }
`;

export default function DictionaryPage() {
    const [data, setData] = useState(null);
    const [fishList, setFishList] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("/data/data_fish.json");
                const json = await res.json();
                setData(Object.values(json));
                setFishList(Object.values(json));
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

    return (
        <Layout title="Dictionary" home={false}>
            <Gradient>
                <Container>
                    <DictionarySearch handleSearch={handleSearch}/>
                    <TypeNav>
                        <Type>바다</Type>
                        <Type className="border">민물</Type>
                        <Type>수온</Type>
                        <Type className="border">크기</Type>
                        <Type>성격</Type>
                    </TypeNav>
                    <ItemContainer>
                        {fishList.length === 0 ? (
                            <h1>물고기 정보를 찾을 수 없습니다!</h1>
                        ) : (
                            fishList.map((fish) => (
                                <FishCard
                                    key={fish.num}
                                    fish={fish}
                                />
                            ))
                        )}
                    </ItemContainer>
                </Container>
            </Gradient>
        </Layout>
    )
}