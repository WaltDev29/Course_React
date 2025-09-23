import React, {useState, useEffect} from "react";
import UseCounter from "./UseCounter";

const MAX_COUNT = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    // Custom Hook 사용
    const [count, increaseCount, decreaseCount] = UseCounter(0)

    useEffect(() => {
        console.log("===============");
        console.log("useEffect() isFull is called");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_COUNT);
        console.log("===============");
        console.log(`Current count value : ${count}`);
    }, [count]);

    return (
        <div style={{padding:20}}>
            <p>{`총 ${count}명이 수용되어 있습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color:"red"}}>수용할 수 있는 정원이 가득 찼습니다.</p>}
        </div>
    )
}

export default Accommodate;