import React, {useState} from "react";
import Layout from "../Components/layout/Layout";
import Gradient from "../Components/layout/Gradient";
import styled from "styled-components";
import FishCard from "../Components/dictionaryPage/FishCard";
import Aside from "../Components/matchPage/Aside";

const Section = styled.section`
    flex-grow: 1;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 7fr 3fr;
    justify-content: center;
    width: 1200px;
    height: 100%;
`;

const Tank = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-image: url("/imgs/aquamate/tank.png");
    background-size: cover;
    background-position: center;
    border: 1px solid rgb(207, 207, 207);
`;

const MatchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const MatchResult = styled.div`
    color: #ff64a7;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 3px 8px;
`;

const Heart = styled.img`
    width: 100px;
    margin: 20px;
`;

export default function MatchPage() {
    const [fishList, setFishList] = useState([]);
    const [right, setRight] = useState(false);

    const pushFish = fish => {
        if (!right) {
            setFishList([fish]);
            setRight(true);
        }
        else {
            setFishList(prev => [prev[0], fish]);
            setRight(false);
        }
        // if (fishList.length === 0) setFishList([fish]);
        // else if (fishList.length === 1) setFishList(prev => [prev[0], fish])
        // else if (fishList.length === 2) setFishList(prev => [prev[prev.length -1], fish]);
    }

    return (
        <Layout title="Match" home={false}>
            <Gradient>
                <Section>
                    <Container>
                        <Tank>
                            <MatchContainer>
                                {fishList[0] && <FishCard
                                    key={fishList[0].num}
                                    fish={fishList[0]}
                                />}
                                {fishList.length === 2 && <Heart src="/imgs/aquamate/match_heart.png" />}
                                {fishList[1] && <FishCard
                                    key={fishList[1].num}
                                    fish={fishList[1]}
                                />}
                            </MatchContainer>
                            {fishList.length === 2 && <MatchResult>궁합이 좋습니다!</MatchResult>}
                        </Tank>
                        <Aside pushFish={pushFish} />
                    </Container>
                </Section>
            </Gradient>
        </Layout>
    )
}