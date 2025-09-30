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

    function handleClick() {
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