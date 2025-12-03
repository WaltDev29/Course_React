import React, {useEffect, useState} from "react";
import Layout from "../Components/Layout";
import DictionarySearch from "../Components/DictionarySearch";
import styled from "styled-components";
import FishCard from "../Components/FishCard";

const Container = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const GradientTop = styled.div`
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.75) 75%, rgba(255, 255, 255, 1) 100%);
    width: 100%;
    height: 100px;
`;

const GradientBottom = styled.div`
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.75) 75%, rgba(255, 255, 255, 1) 100%);
    width: 100%;
    height: 50px;
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

    // todo 검색 기능 구현
    const handleSearch = () => {
        alert(text);
    };

    return (
        <Layout title="Dictionary">
            <GradientTop/>
            <Container>
                <DictionarySearch setText={setText} handleSearch={handleSearch}/>
                <TypeNav>
                    <Type>바다</Type>
                    <TypeBetween>민물</TypeBetween>
                    <Type>수온</Type>
                    <TypeBetween>크기</TypeBetween>
                    <Type>성격</Type>
                </TypeNav>
                <ItemContainer>
                    {data && Object.values(data).map((fish) => {
                        return (
                            // todo 온클릭 이벤트 구현
                            <FishCard
                                key={fish.num}
                                name={fish.name}
                                imgSrc={`imgs/aquamate/${fish.img}`}
                            />
                        )
                    })}
                </ItemContainer>
            </Container>
            <GradientBottom/>
        </Layout>
    )
}