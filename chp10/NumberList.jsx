import React from "react"

function NumberList(props) {
    const {numbers} = props;

    const listItems = numbers.map(num =>
        <li>{num}</li>
    );

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default NumberList;