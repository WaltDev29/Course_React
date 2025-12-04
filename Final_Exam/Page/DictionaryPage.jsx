import React, {useEffect, useState} from "react";
import Layout from "../Components/layout/Layout";
import DictionarySearch from "../Components/dictionaryPage/DictionarySearch";
import styled from "styled-components";
import FishCard from "../Components/dictionaryPage/FishCard";
import Gradient from "../Components/layout/Gradient";

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
`;

const TypeBetween = styled.h3`
    text-align: center;
    flex: 1;
    font-size: 1.5rem;
    padding: 0 50px;
    border-left: 1px solid rgb(0, 183, 255);
    border-right: 1px solid rgb(0, 183, 255);
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    flex-wrap: wrap;
`;

export default function DictionaryPage() {
    const [text, setText] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("/data/data_fish.json");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
                alert("물고기 정보 불러오기 실패");
            }
        }

        loadData();
    }, []);

    const handleSearch = target => {
        setText(target);
    };

    return (
        <Layout title="Dictionary">
            <Gradient>
                <Container>
                    <DictionarySearch handleSearch={handleSearch}/>
                    <TypeNav>
                        <Type>바다</Type>
                        <TypeBetween>민물</TypeBetween>
                        <Type>수온</Type>
                        <TypeBetween>크기</TypeBetween>
                        <Type>성격</Type>
                    </TypeNav>
                    <ItemContainer>
                        {data && Object.values(data).map((fish) => {
                            if (fish.name.includes(text))
                                return (
                                    <FishCard
                                        key={fish.num}
                                        fish={fish}
                                    />
                                )
                        })}
                    </ItemContainer>
                </Container>
            </Gradient>
        </Layout>
    )
}