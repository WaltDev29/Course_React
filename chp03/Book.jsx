import React from "react";

function Book(props) {
    return(
        <div>
            <h1>{`이 책의 ${props.name} 이름은 입니다.`}</h1>
            <h2>{`이 책은 총 ${props.totalPage}페이지로 이루어져 있습니다.`}</h2>
        </div>
    );
}

export default Book;