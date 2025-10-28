import React from "react";

function AppNumberList() {
    const numbers = [1,2,3,4,5];

    return (
        <div>
            <h1>숫자 리스트</h1>
            <NumberList numbers={numbers}/>
        </div>
    )
}

function NumberList(props) {
    const {numbers} = props;

    const listItems = numbers.map(num => <li>{num}</li>)

    return (
        <ul>{listItems}</ul>
    )
}

export default AppNumberList;