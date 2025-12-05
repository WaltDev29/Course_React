import React, {useState} from "react";

function Assign(props) {
    const[input, setInput] = useState("");
    const[text, setText] = useState("");

    return (
        <div>
            <p>입력한 텍스트를 알림으로 출력합니다.</p>
            <input type="text" onChange={(event) => setInput(event.target.value)}/>
            <button onClick={() => {
                alert(input);
                setText(input);
            }}>제출</button>
            <div>
                <h2 id="result">입력된 내용 : {text}</h2>
            </div>
        </div>
    )
}

export default Assign;