import React from "react";
import styled, { keyframes } from "styled-components";

// ✅ 데이터
const songs = [
    {
        name: "修羅",
        url: "https://youtu.be/h4F-q-R67H0?si=x9g07htdLCbWPgf7",
        releasedAt: "2025.08.08"
    },
    {
        name: "へび",
        url: "https://youtu.be/sf0QFJTvOLM?si=RYVd6c0lWyEgw5_u",
        releasedAt: "2025.01.17"
    },
    {
        name: "火星人",
        url: "https://youtu.be/OLRbIc8KZ_8?si=VXOg7B4x7UlqUg9H",
        releasedAt: "2025.05.09"
    },
    {
        name: "太陽",
        url: "https://youtu.be/Qgj3xHRlGr8?si=NoZSIPZh8fgkt3sT",
        releasedAt: "2024.11.22"
    },
    {
        name: "ブレーメン",
        url: "https://youtu.be/oy6MDr6I6rM?si=TVaNA9VpUVqHGw9C",
        releasedAt: "2022.07.04"
    },
    {
        name: "言って",
        url: "https://youtu.be/F64yFFnZfkI?si=oFuTeVzc-tjmtQYo",
        releasedAt: "2017.06.28"
    },
    {
        name: "テレパス",
        url: "https://youtu.be/LTeROfwwtnA?si=wBq5V21OdHMqb8F8",
        releasedAt: "2023.01.12"
    },
    {
        name: "都落ち",
        url: "https://youtu.be/pHdJmDFYqTU?si=521axUDzPcDxDs_L",
        releasedAt: "2023.04.05"
    }
];


// ✅ 애니메이션 정의
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

// ✅ styled-components
const Container = styled.div`
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(180deg, #fff8f8, #ffe6ec);
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;
  font-family: "Noto Sans JP", sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    animation: ${float} 3s ease-in-out infinite;
`;

const Card = styled.div`
    width: 220px;
    border-radius: 15px;
    overflow: hidden;
    background: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05) translateY(-6px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    }

    a {
        text-decoration: none;
        color: inherit;
        display: block;
    }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

const Info = styled.div`
  padding: 15px;
`;

const Name = styled.h2`
  font-size: 1.4em;
  margin: 10px 0 5px;
  color: #444;
  text-align: center;
`;

const Date = styled.p`
  font-size: 0.9em;
  color: #888;
  text-align: center;
`;

// ✅ 컴포넌트
function Lab() {
    return (
        <Container>
            <Title>Yorushika Playlist</Title>
            <Wrapper>
                {songs.map((song,idx) => (
                    <Card key={song.name}>
                        <a href={song.url} target="_blank" rel="noreferrer">
                            <Img src={`/imgs/img0${idx+1}.webp`} alt={song.name} />
                            <Info>
                                <Name>{song.name}</Name>
                                <Date>{song.releasedAt}</Date>
                            </Info>
                        </a>
                    </Card>
                ))}
            </Wrapper>
        </Container>
    );
}

export default Lab;
