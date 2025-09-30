import React, {useState} from "react";

function Assign(props) {
    const[text, setText] = useState("")

    function handleAlert(event) {
        alert(text);
    }

    return (
        <div>
            <p>입력한 텍스트를 알림으로 출력합니다.</p>
            <input type="text" onChange={(event) => setText(event.target.value)}/>
            <button onClick={handleAlert}>제출</button>
        </div>
    )
}

export default Assign;