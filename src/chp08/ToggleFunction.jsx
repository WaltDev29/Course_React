import React, {useState} from "react";
import styled from "styled-components";

const Button = styled.button`
    font-size: 30px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
`;

function ToggleFunction() {
    // Hook (클래스형 컴포넌트의 State와 같은 역할)
    const[isToggleOn, setIsToggleOn] = useState(true);
    // 1. Handler를 함수로 정의
    // function handleClick() {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    // 2. 상수를 선언하고 상수에 익명함수를 대입
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return(
        <div>
            <Button onClick={handleClick}>
                Function Type Component: {isToggleOn ? "On" : "Off"}
            </Button>
        </div>
    )
}

export default ToggleFunction;