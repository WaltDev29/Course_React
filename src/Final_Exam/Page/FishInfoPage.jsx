import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";

import Layout from "../Components/layout/Layout";
import Gradient from "../Components/layout/Gradient";

import MainSection from "../Components/fishInfoPage/MainSection";
import SpecSection from "../Components/fishInfoPage/SpecSection";

const Container = styled.section`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    flex-wrap: wrap;
    
    @media (max-width: 500px) {
        width: 98%;
    }
`;

export default function FishInfoPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const fish = location?.state || null;

    useEffect(() => {
        if (!fish) navigate("/dictionary");
    }, [fish, navigate])

    if (!fish) return null;

    return (
        <Layout title="Dictionary" home={false}>
            <Gradient>
                <Container>
                    <Wrapper>
                        <MainSection
                            name={fish.name}
                            img={fish.img}
                            desc={fish.basic}
                        />
                        <SpecSection
                            env={fish.env}
                            type={fish.type}
                            taming={fish.taming}
                        />
                    </Wrapper>
                </Container>
            </Gradient>
        </Layout>
    )
}