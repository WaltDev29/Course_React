import React from "react";
import Book from "./Book";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 580px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const books = [
    {
        title:"노인과바다",
        author: "어니스트 헤밍웨이",
        image: "https://image.aladin.co.kr/product/171/4/cover500/8936603795_1.jpg"
    },
    {
        title:"지상의양식",
        author: "앙드레 지드",
        image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788937461576.jpg"
    },
    {
        title:"사양",
        author: "다자이 오사무",
        image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788936464448.jpg"
    }

];

function BookList() {
    return (
        <Wrapper className="bookListWrapper">
            {
                books.map((book) => {
                  return (
                      <Book
                        title={book.title}
                        author={book.author}
                        image={book.image}
                      />
                  )
                })
            }
        </Wrapper>
    );
}

export default BookList;